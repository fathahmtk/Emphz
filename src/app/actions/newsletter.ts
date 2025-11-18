
'use server';

import { z } from 'zod';

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

  // Admin features removed, returning mock success.
  return {
    status: 'success',
    message: 'Thank you for subscribing!',
  };
}
