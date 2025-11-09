
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getAuth, Auth } from 'firebase-admin/auth';

let app: App;
let firestore: Firestore;
let auth: Auth;

if (getApps().length === 0) {
  app = initializeApp();
  firestore = getFirestore(app);
  auth = getAuth(app);
} else {
  app = getApps()[0];
  firestore = getFirestore(app);
  auth = getAuth(app);
}

export { app, firestore, auth };
