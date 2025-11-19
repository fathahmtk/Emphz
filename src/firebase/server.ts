'use server';

import { initializeApp, getApp, getApps, type FirebaseOptions } from 'firebase-admin/app';
import { getFirestore as getFirestoreAdmin } from 'firebase-admin/firestore';
import { firebaseConfig } from './config';

const firebaseAdminConfig = {
  projectId: firebaseConfig.projectId,
};

function getFirebaseAdminApp() {
  if (getApps().length > 0) {
    return getApp();
  }
  return initializeApp(firebaseAdminConfig);
}

export function getFirestore() {
  return getFirestoreAdmin(getFirebaseAdminApp());
}
