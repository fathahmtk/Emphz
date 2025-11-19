
'use server';

import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { initializeFirebase, errorEmitter, FirestorePermissionError } from '@/firebase';

const emailSchema = z.string().email({ message: 'Please enter a valid email address.' });

type State = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function subscribeToNewsletter(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedEmail = emailSchema.safeParse(formData.get('email'));

  if (!validatedEmail.success) {
    return {
      status: 'error',
      message: validatedEmail.error.errors[0].message,
    };
  }

  const { firestore } = initializeFirebase();
  const subscriptionsCollection = collection(firestore, 'subscriptions');
  const subscriptionData = {
    email: validatedEmail.data,
    subscribedAt: serverTimestamp()
  };

  addDoc(subscriptionsCollection, subscriptionData)
    .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
            path: subscriptionsCollection.path,
            operation: 'create',
            requestResourceData: subscriptionData,
        });
        errorEmitter.emit('permission-error', permissionError);
    });

  return {
      status: 'success',
      message: 'Thank you for subscribing!',
  };
}
