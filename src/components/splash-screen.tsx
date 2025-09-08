'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useLoading } from '@/context/loading-context';

export function SplashScreen() {
  const { isFirstLoad, stopLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [stopLoading]);

  return (
    <AnimatePresence>
      {isFirstLoad && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <motion.div
            className="flex items-center space-x-2"
            initial={{ scale: 1, y: 0 }}
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -10, 0],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut'
              },
            }}
            exit={{
              scale: 0.5,
              y: -280, // Adjust this value to position it correctly in your header
              x: -610, // Adjust this value to position it correctly in your header
              transition: { duration: 0.8, ease: 'easeOut' },
            }}
          >
            <Leaf className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold">Freshify</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
