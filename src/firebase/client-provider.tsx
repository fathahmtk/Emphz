
'use client';

import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';

// This provider is intended to be used in a Client Component
// that will be the root of the component tree.
// It will initialize Firebase on the client and provide it to the rest of the app.
// It will only be initialized once.
export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { firebaseApp, firestore, auth } = initializeFirebase();
  return (
    <FirebaseProvider
      firebaseApp={firebaseApp}
      firestore={firestore}
      auth={auth}
    >
      {children}
    </FirebaseProvider>
  );
}
