'use client';
import { useState } from 'react';
import { products as initialProducts } from '@/lib/vegetables';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/types';

export function StockTracker() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const getStockLevel = (stock: number) => {
    if (stock > 50) return 'High';
    if (stock > 20) return 'Medium';
    return 'Low';
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-headline">Live Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="text-center">Stock Level</TableHead>
                <TableHead className="text-right">Units</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map(prod => (
                <TableRow key={prod.id}>
                  <TableCell className="font-medium">{prod.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4 justify-center">
                       <Progress
                        value={(prod.stock / 100) * 100}
                        className="w-2/3"
                      />
                      <Badge
                        variant={
                          getStockLevel(prod.stock) === 'Low'
                            ? 'destructive'
                            : 'secondary'
                        }
                      >
                        {getStockLevel(prod.stock)}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{prod.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
