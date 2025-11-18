
'use server';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';
import { firestore } from '@/firebase/server';
// In a real app, you'd use Firebase Storage for file uploads.
// For this demo, we'll just record the file name and size.

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
  
  const { name, email, phone, position, coverLetter, cv } = validatedFields.data;

  // In a real app, you would upload the file to Firebase Storage here.
  // For now, we just log the info.
  const cvInfo = `CV Uploaded: ${cv.name} (${(cv.size / 1024).toFixed(2)} KB)`;


  try {
    if (firestore) {
      const applicationsCollection = collection(firestore, 'job_applications');
      await addDoc(applicationsCollection, {
        name,
        email,
        phone,
        position: position || 'General Application',
        coverLetter: coverLetter || '',
        cvInfo, // In a real app, this would be the Storage URL
        submittedAt: serverTimestamp(),
      });
    }

    return {
      status: 'success',
      message: `Thank you, ${name}! Your application has been received. We will be in touch if there is a suitable opening.`,
    };
  } catch (error) {
    console.error('Error saving application:', error);
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}

