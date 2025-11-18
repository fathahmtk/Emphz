
'use server';

import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getSdks } from '@/firebase';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/firebase/config';
import { getFirestore } from 'firebase/firestore';

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

  try {
    const firebaseApp = initializeApp(firebaseConfig);
    const { firestore } = getSdks(firebaseApp);
    const subscriptionsCollection = collection(firestore, 'subscriptions');
    
    await addDoc(subscriptionsCollection, {
        email: validatedEmail.data,
        subscribedAt: serverTimestamp()
    });

    return {
        status: 'success',
        message: 'Thank you for subscribing!',
    };
  } catch (e: any) {
    return {
        status: 'error',
        message: e.message || 'Something went wrong. Please try again.',
    }
  }
}
