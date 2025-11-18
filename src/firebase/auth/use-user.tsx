
'use client';

import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState, useContext } from 'react';
import { Auth } from 'firebase/auth';
import { FirebaseContext } from '../provider';

export interface UserHookResult { 
  user: User | null;
  loading: boolean; // True during initial auth check
  auth: Auth | null;
}

export function useAuth(): UserHookResult {
  const context = useContext(FirebaseContext);
  const auth = context?.auth ?? null;
  const [user, setUser] = useState<User | null>(auth?.currentUser || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        setLoading(false);
      },
      (error) => {
        console.error('Auth state change error:', error);
        setUser(null);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [auth]);

  return { user, loading, auth };
}
