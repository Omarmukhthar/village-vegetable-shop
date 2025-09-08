import Image from 'next/image';
import { Sprout, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          About Freshify
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We're passionate about bringing the freshest, locally-sourced vegetables right to your doorstep.
        </p>
      </section>

      <section className="relative mb-20">
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="https://picsum.photos/seed/team/1200/400"
            alt="Happy team members in a field"
            fill
            className="object-cover"
            data-ai-hint="team field"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-11/12 md:w-3/4">
          <div className="bg-card/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Sprout className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-headline text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">To connect communities with local farmers and provide access to fresh, healthy food.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-headline text-2xl font-semibold mb-2">Our Story</h3>
              <p className="text-muted-foreground">Founded in 2024, Freshify started with a simple idea: everyone deserves fresh food.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Target className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-headline text-2xl font-semibold mb-2">Our Values</h3>
              <p className="text-muted-foreground">We believe in sustainability, community, and the joy of a home-cooked meal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 text-center">
         <h2 className="font-headline text-4xl font-semibold mb-8">Meet the Team</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative h-40 w-40 mb-4">
                <Image src="https://picsum.photos/seed/alex/200/200" alt="Team member" className="rounded-full object-cover" fill data-ai-hint="portrait person" />
              </div>
              <h4 className="font-headline text-xl font-bold">Alex Doe</h4>
              <p className="text-accent-foreground font-semibold">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="relative h-40 w-40 mb-4">
                <Image src="https://picsum.photos/seed/jane/200/200" alt="Team member" className="rounded-full object-cover" fill data-ai-hint="portrait person" />
              </div>
              <h4 className="font-headline text-xl font-bold">Jane Smith</h4>
              <p className="text-accent-foreground font-semibold">Head of Operations</p>
            </div>
             <div className="flex flex-col items-center">
               <div className="relative h-40 w-40 mb-4">
                <Image src="https://picsum.photos/seed/sam/200/200" alt="Team member" className="rounded-full object-cover" fill data-ai-hint="portrait person" />
              </div>
              <h4 className="font-headline text-xl font-bold">Sam Wilson</h4>
              <p className="text-accent-foreground font-semibold">Logistics Manager</p>
            </div>
             <div className="flex flex-col items-center">
               <div className="relative h-40 w-40 mb-4">
                <Image src="https://picsum.photos/seed/emily/200/200" alt="Team member" className="rounded-full object-cover" fill data-ai-hint="portrait person" />
              </div>
              <h4 className="font-headline text-xl font-bold">Emily Brown</h4>
              <p className="text-accent-foreground font-semibold">Customer Relations</p>
            </div>
         </div>
      </section>
    </div>
  );
}
