import { StockTracker } from '@/components/stock-tracker';
import { Package } from 'lucide-react';

export default function StockPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <Package className="h-12 w-12 mb-4 text-primary" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">
          Stock Tracker
        </h1>
        <p className="text-lg text-muted-foreground">
          View real-time stock availability and get AI-powered suggestions.
        </p>
      </div>
      <StockTracker />
    </div>
  );
}
