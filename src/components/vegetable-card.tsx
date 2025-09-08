'use client';

import Image from 'next/image';
import type { Product } from '@/lib/types';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, PackageCheck } from 'lucide-react';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, cartItems } = useCart();
  const { toast } = useToast();

  const cartItem = cartItems.find(item => item.id === product.id);
  const isInCart = !!cartItem;

  const handleAddToCart = (quantity: number) => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart! 🎉",
      description: `${quantity}${product.unit.replace('per ', '')} of ${product.name} is now in your basket.`,
    });
  };

  const isKgBased = product.unit === 'per kg';

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader className="p-0 border-b">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.aiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <CardTitle className="font-headline text-xl mb-2">{product.name}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4 h-10">{product.description}</p>
        {product.stock < 10 && (
          <Badge variant="destructive" className="mb-2 animate-pulse">Low Stock!</Badge>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start gap-4">
        <div className='flex items-baseline'>
          <p className="text-2xl font-bold text-foreground">₹{product.price.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground ml-1.5">{product.unit}</p>
        </div>
        <div className="w-full flex flex-col gap-2">
          {isKgBased ? (
            <>
              <Button onClick={() => handleAddToCart(0.5)} disabled={product.stock === 0} size="sm" variant="outline" className="w-full">
                Add 0.5kg
              </Button>
              <Button onClick={() => handleAddToCart(1)} disabled={product.stock === 0} size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Add 1kg
              </Button>
            </>
          ) : (
            <Button onClick={() => handleAddToCart(1)} disabled={isInCart || product.stock === 0} size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              {isInCart ? (
                <>
                  <PackageCheck /> In Cart
                </>
              ) : product.stock === 0 ? (
                'Out of Stock'
              ) : (
                <>
                  <ShoppingCart /> Add to Cart
                </>
              )}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
