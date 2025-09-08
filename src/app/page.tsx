import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/vegetable-card';
import { products } from '@/lib/vegetables';
import { Leaf, Award, Truck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredProduct = products.find(p => p.id === '9'); // Sweet Strawberries

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative text-center mb-20 h-[550px] flex flex-col justify-center items-center rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-background">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
            <div className="absolute top-[10%] left-[10%] text-6xl animate-float">🥕</div>
            <div className="absolute top-[20%] right-[15%] text-5xl animate-float [animation-delay:0.5s]">🥬</div>
            <div className="absolute bottom-[25%] left-[20%] text-7xl animate-float [animation-delay:1s]">🍅</div>
            <div className="absolute bottom-[10%] right-[25%] text-6xl animate-float [animation-delay:1.5s]">🍓</div>
            <div className="absolute top-[40%] left-[45%] text-5xl animate-float [animation-delay:0.2s]">🥦</div>
        </div>

        <div className="relative z-10 p-6">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Fresh from the Farm, Straight to You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The best selection of fresh, locally sourced vegetables and fruits.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">
            <Link href="#todays-harvest">Shop Now 🌱</Link>
          </Button>
        </div>
      </section>

      {/* Category Section */}
      <section className="mb-20">
        <h2 className="font-headline text-4xl font-bold mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary">
            <span className="text-5xl mb-4">🥬</span>
            <h3 className="font-headline text-2xl font-semibold">Leafy Greens</h3>
          </Card>
           <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary">
            <span className="text-5xl mb-4">🍓</span>
            <h3 className="font-headline text-2xl font-semibold">Fresh Fruits</h3>
          </Card>
          <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary">
            <span className="text-5xl mb-4">🧅</span>
            <h3 className="font-headline text-2xl font-semibold">Root Veggies</h3>
          </Card>
          <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary">
            <span className="text-5xl mb-4">🌿</span>
            <h3 className="font-headline text-2xl font-semibold">Organic</h3>
          </Card>
        </div>
      </section>

      {/* What's New Section */}
      {featuredProduct && (
        <section className="mb-20">
           <h2 className="font-headline text-4xl font-bold mb-10 text-center">Trending Now</h2>
          <Card className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 p-8 overflow-hidden bg-card/50 backdrop-blur-sm rounded-2xl">
            <div className="relative w-full h-96 rounded-lg overflow-hidden group">
               <Image
                src={featuredProduct.image}
                alt={featuredProduct.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={featuredProduct.aiHint}
              />
            </div>
            <div>
              <span className="text-sm uppercase text-accent-foreground font-bold tracking-wider">Featured Product</span>
              <h3 className="font-headline text-5xl font-bold my-3">{featuredProduct.name}</h3>
              <p className="text-muted-foreground text-lg mb-6">{featuredProduct.description}</p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-foreground">₹{featuredProduct.price.toFixed(2)}</span>
                {featuredProduct.stock < 20 && <span className="text-destructive font-semibold animate-pulse">Only {featuredProduct.stock}kg left ⏳</span>}
              </div>
              <Button size="lg" className="font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90">Add to Cart</Button>
            </div>
          </Card>
        </section>
      )}


      {/* Today's Harvest Section */}
      <section id="todays-harvest" className="mb-20">
        <h2 className="font-headline text-4xl font-bold mb-10 text-center">Today's Harvest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm rounded-2xl">
         <h2 className="font-headline text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 mb-5 border-2 border-primary/30">
              <Leaf className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-headline text-2xl font-semibold mb-2">Always Fresh</h3>
            <p className="text-muted-foreground max-w-xs">Sourced from local farms to ensure the best quality.</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 mb-5 border-2 border-primary/30">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-headline text-2xl font-semibold mb-2">Top Tier Quality</h3>
            <p className="text-muted-foreground max-w-xs">We hand-pick the best produce for you.</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 mb-5 border-2 border-primary/30">
              <Truck className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-headline text-2xl font-semibold mb-2">Speedy Delivery</h3>
            <p className="text-muted-foreground max-w-xs">Get your fresh vegetables delivered to your doorstep.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
