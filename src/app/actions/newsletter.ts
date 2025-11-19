
'use server';

import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getFirestore } from '@/firebase/server';
import { FirestorePermissionError } from '@/firebase';

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

  const firestore = getFirestore();
  const subscriptionsCollection = collection(firestore, 'subscriptions');
  const subscriptionData = {
    email: validatedEmail.data,
    subscribedAt: serverTimestamp()
  };

  try {
    await addDoc(subscriptionsCollection, subscriptionData);
  } catch (serverError) {
      // Re-throw a more specific error for the boundary to catch
      throw new FirestorePermissionError({
          path: subscriptionsCollection.path,
          operation: 'create',
          requestResourceData: subscriptionData,
      });
  }

  return {
      status: 'success',
      message: 'Thank you for subscribing!',
  };
}
