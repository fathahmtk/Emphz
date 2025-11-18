
'use client';

import React, { createContext, useContext, useMemo, type ReactNode, type DependencyList } from 'react';
import { initializeFirebase } from '@/firebase';
import type { Firestore } from 'firebase/firestore';

// A unique symbol to identify memoized Firebase objects
const MEMOIZED_SYMBOL = Symbol('memoized');

// Type for the object returned by useMemoFirebase
export interface MemoizedFirebase<T> {
  [MEMOIZED_SYMBOL]: boolean;
  value: T;
}

// Type guard to check if a value is a MemoizedFirebase object
export function isMemoized<T>(value: any): value is MemoizedFirebase<T> {
  return value && value[MEMOIZED_SYMBOL];
}

export function useMemoFirebase<T>(factory: () => T, deps: DependencyList): MemoizedFirebase<T> | null {
  const memoizedValue = useMemo(factory, deps);

  // Return null if the memoized value is null or undefined
  if (memoizedValue === null || memoizedValue === undefined) {
    return null;
  }

  // Wrap the memoized value in a special object
  return {
    [MEMOIZED_SYMBOL]: true,
    value: memoizedValue,
  };
}


const FirebaseContext = createContext<Firestore | null>(null);

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  const { firestore } = useMemo(() => {
    return initializeFirebase();
  }, []);

  return (
    <FirebaseContext.Provider value={firestore}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirestore = (): Firestore | null => {
    return useContext(FirebaseContext);
}
