'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { CartItem } from './cart-item';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export function CartSheet() {
  const { cartItems, totalPrice, isCartAnimating } = useCart();
  const { toast } = useToast();

  const handleCheckoutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (cartItems.length === 0) {
      e.preventDefault();
      toast({
        variant: 'destructive',
        title: 'Your cart is empty!',
        description: 'Add some fresh veggies before checking out.',
      });
    }
  };

  const getCartCountText = () => {
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    // if total is a whole number, display as int, otherwise 1 decimal place
    return total % 1 === 0 ? total : total.toFixed(1);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className={cn(
              'relative h-16 w-16 rounded-full shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground text-lg transition-transform duration-300 ease-in-out',
              isCartAnimating ? 'transform scale-110' : ''
            )}
          >
            <ShoppingCart className="h-7 w-7" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold ring-2 ring-background">
                {getCartCountText()}
              </span>
            )}
            <span className="sr-only">Open cart</span>
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg bg-card/80 backdrop-blur-lg">
        <SheetHeader className="px-6">
          <SheetTitle className="font-headline text-2xl">Your Basket</SheetTitle>
        </SheetHeader>
        <Separator />
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-1">
              <div className="flex flex-col gap-4 p-6">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </ScrollArea>
            <Separator />
            <SheetFooter className="p-6 bg-secondary/50">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <SheetClose asChild>
                  <Button
                    asChild
                    onClick={handleCheckoutClick}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
                  >
                    <Link href="/checkout/address">Proceed to Checkout 🚀</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full border-4 border-dashed border-muted p-6">
              <Leaf className="h-12 w-12 text-muted" />
            </div>
            <h3 className="font-headline text-xl">Your basket is empty</h3>
            <p className="text-muted-foreground">Looks like you haven't added any fresh veggies yet.</p>
            <SheetClose asChild>
              <Button asChild>
                <Link href="/">Start Shopping</Link>
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
