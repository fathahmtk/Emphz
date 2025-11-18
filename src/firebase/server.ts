
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getAuth, Auth } from 'firebase-admin/auth';
import { firebaseConfig } from './config';

let app: App;
let firestore: Firestore;
let auth: Auth;

// Condition to check if running in a server environment
if (typeof window === 'undefined') {
  if (getApps().length === 0) {
    app = initializeApp({
      projectId: firebaseConfig.projectId,
    });
    firestore = getFirestore(app);
    auth = getAuth(app);
  } else {
    app = getApps()[0];
    firestore = getFirestore(app);
    auth = getAuth(app);
  }
}

// @ts-ignore
export { app, firestore, auth };
