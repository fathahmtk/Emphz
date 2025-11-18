
'use client';

import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuth as useFirebaseAuth } from '../provider';
import { Auth } from 'firebase/auth';

export interface UserHookResult { 
  user: User | null;
  loading: boolean; // True during initial auth check
  auth: Auth;
}


export function useAuth(): UserHookResult {
  const auth = useFirebaseAuth();
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
