import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/context/cart-context';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Poppins, Nunito } from 'next/font/google';
import { CartSheet } from '@/components/cart-sheet';
import { LoadingProvider } from '@/context/loading-context';
import { SplashScreen } from '@/components/splash-screen';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Freshify',
  description: 'Online Vegetable Shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="icon" 
          type="image/svg+xml" 
          href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmNGMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sZWFmLWljb24gbHVjaWRlLWxlYWYiPjxwYXRoIGQ9Ik0xMSAyMEE3IDcgMCAwIDEgOS44IDYuMUMxNS41IDUgMTcgNC40OCAxOSAyYzEgMiAyIDQuMTggMiA4IDAgNS41LTQuNzggMTAtMTAgMTBaIi8+PHBhdGggZD0iTTIgMjFjMC0zIDEuODUtNS4zNiA1LjA4LTZDOS41IDE0LjUyIDEyIDEzIDEzIDEyIi8+PC9zdmc+" 
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased', poppins.variable, nunito.variable)}>
        <ThemeProvider storageKey="vite-ui-theme">
          <LoadingProvider>
            <CartProvider>
              <SplashScreen />
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
              </div>
              <Toaster />
              <CartSheet />
            </CartProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
