
'use client';
import {
  FirestoreError,
  Query,
  collection,
  onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

export function useCollection<T>(query: Query<T> | undefined | null) {
  const [data, setData] = useState<Array<T & { id: string }>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    const unsubscribe = onSnapshot(
      query,
      (querySnapshot) => {
        const data: Array<T & { id: string }> = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setData(data);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [query]);

  return { data, loading, error };
}
