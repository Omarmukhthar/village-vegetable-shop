'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Truck } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConfirmationPage() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl"
      >
        <Card className="text-center p-8 shadow-2xl">
          <CardHeader>
            <motion.div
              variants={iconVariants}
              className="mx-auto"
            >
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CardTitle className="font-headline text-4xl">Thank You for Your Order!</CardTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
            <CardDescription className="text-lg text-muted-foreground pt-2">
              Your fresh produce is being prepared and will be delivered soon.
            </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-lg bg-secondary/50 flex flex-col items-center gap-3">
                <Truck className="h-10 w-10 text-primary" />
                <p className="font-semibold text-lg">Payment Method: Cash on Delivery</p>
                <p className="text-muted-foreground">Please have the exact amount ready. UPI is also accepted.</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p>You'll receive a notification once your order is out for delivery.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="font-bold text-lg">
                <Link href="/">← Continue Shopping</Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
