
'use client';

import React, { createContext, useContext, useMemo, type ReactNode } from 'react';
import { initializeFirebase } from '@/firebase';
import type { Firestore } from 'firebase/firestore';

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
