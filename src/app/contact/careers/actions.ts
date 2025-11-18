
'use server';

import { z } from 'zod';

const applicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(5, 'A valid phone number is required.'),
  position: z.string().optional(),
  coverLetter: z.string().optional(),
  cv: z.instanceof(File).refine(file => file.size > 0, 'CV/Resume is required.'),
});

type State = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function submitJobApplication(
  prevState: State,
  formData: FormData
): Promise<State> {

  const validatedFields = applicationSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    position: formData.get('position'),
    coverLetter: formData.get('cover-letter'),
    cv: formData.get('cv'),
  });

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      status: 'error',
      message: firstError || 'Invalid form data. Please check all fields.',
    };
  }
  
  const { name } = validatedFields.data;

  // Admin features removed, returning mock success.
  return {
    status: 'success',
    message: `Thank you, ${name}! Your application has been received. We will be in touch if there is a suitable opening.`,
  };
}
