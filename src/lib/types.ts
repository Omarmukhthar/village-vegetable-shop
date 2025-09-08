export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  aiHint: string;
  category: 'vegetable' | 'fruit';
  unit: 'per kg' | 'per piece' | 'per bunch' | 'per punnet' | 'per dozen' | 'per 500g' | 'per 250g';
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  unit: Product['unit'];
};
