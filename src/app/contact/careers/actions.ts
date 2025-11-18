
'use server';

import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getSdks } from '@/firebase';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/firebase/config';
import { getFirestore } from 'firebase/firestore';


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
  
  const { cv, ...applicationData } = validatedFields.data;

  try {
    const firebaseApp = initializeApp(firebaseConfig);
    const { firestore } = getSdks(firebaseApp);
    const applicationsCollection = collection(firestore, 'job_applications');

    // NOTE: In a real app, you would upload the CV to Cloud Storage and save the URL.
    // For this prototype, we'll just save the file name.
    await addDoc(applicationsCollection, {
        ...applicationData,
        cvFileName: cv.name,
        submittedAt: serverTimestamp()
    });

    const { name } = validatedFields.data;
    return {
      status: 'success',
      message: `Thank you, ${name}! Your application has been received. We will be in touch if there is a suitable opening.`,
    };

  } catch(e: any) {
    return {
        status: 'error',
        message: e.message || 'Could not submit your application. Please try again.',
    }
  }
}
