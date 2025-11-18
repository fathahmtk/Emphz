
'use server';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';
import { firestore } from '@/firebase/server';

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

  const email = validatedEmail.data;

  try {
    if (!firestore) {
         return {
            status: 'error',
            message: 'Database service is not available. Please try again later.',
        };
    }
    
    const subscriptionsCollection = collection(firestore, 'subscriptions');
    await addDoc(subscriptionsCollection, {
      email: email,
      subscribedAt: serverTimestamp(),
    });
    

    return {
      status: 'success',
      message: 'Thank you for subscribing!',
    };
  } catch (error) {
    console.error('Error saving subscription:', error);
    // You could check for specific error types, e.g., if the email already exists
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
