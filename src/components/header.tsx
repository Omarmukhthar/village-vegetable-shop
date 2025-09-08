'use client';

import Link from 'next/link';
import { Leaf, Package, Info, Bot, ShoppingCart } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from './ui/button';
import { useCart } from '@/context/cart-context';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { CartSheet } from './cart-sheet';
import { useLoading } from '@/context/loading-context';
import { motion } from 'framer-motion';


export function Header() {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const { isFirstLoad } = useLoading();

  const navLinks = [
    { href: '/stock', icon: Package, label: 'Stock' },
    { href: '/about', icon: Info, label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isFirstLoad ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="mr-4 flex"
        >
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">Freshify</span>
          </Link>
        </motion.div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
