'use client';

import Image from 'next/image';
import type { CartItem as CartItemType } from '@/lib/types';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Input } from './ui/input';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const isKgBased = item.unit === 'per kg';
  const step = isKgBased ? 0.5 : 1;

  const handleQuantityChange = (change: number) => {
    const newQuantity = item.quantity + change;
    updateQuantity(item.id, newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty input for user to type
    if (value === '') {
        updateQuantity(item.id, 0); // Or handle as you see fit
        return;
    }
    const newQuantity = parseFloat(value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
        updateQuantity(item.id, newQuantity);
    }
  };

  const displayQuantity = item.quantity > 0 ? item.quantity : '';

  return (
    <div className="flex items-center gap-4 p-2 rounded-lg bg-background/50">
      <div className="relative h-16 w-16 overflow-hidden rounded-md">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-muted-foreground">₹{item.price.toFixed(2)} {item.unit}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleQuantityChange(-step)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={displayQuantity}
          onChange={handleInputChange}
          className="h-8 w-16 text-center"
          step={step}
          min="0"
        />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleQuantityChange(step)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
       <div className="w-20 text-right font-semibold">
          ₹{(item.price * item.quantity).toFixed(2)}
       </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-destructive"
        onClick={() => removeFromCart(item.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
