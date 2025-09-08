'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface LoadingContextType {
  isFirstLoad: boolean;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const stopLoading = useCallback(() => {
    setIsFirstLoad(false);
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isFirstLoad,
        stopLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
