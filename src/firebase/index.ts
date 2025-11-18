
'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import React, { createContext, useContext, useMemo, type ReactNode, type DependencyList } from 'react';

// --- Config ---
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebaseConfig.apiKey) {
  // This will crash immediately if env is missing
  console.warn("Firebase API key missing. Check NEXT_PUBLIC_FIREBASE_API_KEY. Some features may not work.");
}


// --- Initialization ---
let firebaseApp: FirebaseApp;
let auth: ReturnType<typeof getAuth>;
let firestore: ReturnType<typeof getFirestore>;

if (typeof window !== 'undefined') {
    if (getApps().length === 0) {
        if (firebaseConfig.apiKey) {
            firebaseApp = initializeApp(firebaseConfig);
        }
    } else {
        firebaseApp = getApp();
    }

    if (firebaseApp) {
        auth = getAuth(firebaseApp);
        firestore = getFirestore(firebaseApp);
    }
}


// --- Provider & Hooks ---

const FirebaseContext = createContext<{ firestore: ReturnType<typeof getFirestore> | null }>({ firestore: null });

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  const providerValue = { firestore: firestore || null };
  return React.createElement(FirebaseContext.Provider, { value: providerValue }, children);
}

export const useFirestore = (): ReturnType<typeof getFirestore> | null => {
    const context = useContext(FirebaseContext);
    if (context === undefined) {
        throw new Error('useFirestore must be used within a FirebaseClientProvider');
    }
    return context.firestore;
}

// --- Memoization Helpers for Hooks ---
const MEMOIZED_SYMBOL = Symbol('memoized');

export interface MemoizedFirebase<T> {
  [MEMOIZED_SYMBOL]: boolean;
  value: T;
}

export function isMemoized<T>(value: any): value is MemoizedFirebase<T> {
  return value && value[MEMOIZED_SYMBOL];
}

export function useMemoFirebase<T>(factory: () => T, deps: DependencyList): MemoizedFirebase<T> | null {
  const memoizedValue = useMemo(factory, deps);
  if (memoizedValue === null || memoizedValue === undefined) {
    return null;
  }
  return {
    [MEMOIZED_SYMBOL]: true,
    value: memoizedValue,
  };
}

export * from './firestore/use-collection';
export * from './firestore/use-doc';
