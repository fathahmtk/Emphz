
'use server';

import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { initializeFirebase, errorEmitter, FirestorePermissionError } from '@/firebase';


const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  company: z.string().min(2, 'Company name is required.'),
  phone: z.string().min(5, 'A valid phone number is required.'),
  industry: z.string().optional(),
  product: z.string().optional(),
  quantity: z.string().optional(),
  location: z.string().optional(),
  inquiry: z.string().min(10, 'Inquiry must be at least 10 characters.'),
  'file-upload': z.instanceof(File).optional(),
});

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

export async function submitContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    company: formData.get('company'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    industry: formData.get('industry'),
    product: formData.get('product'),
    quantity: formData.get('quantity'),
    location: formData.get('location'),
    inquiry: formData.get('inquiry'),
    'file-upload': formData.get('file-upload'),
  });

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      status: 'error',
      message: firstError || 'Invalid form data. Please check all fields.',
    };
  }
  
  const { firestore } = initializeFirebase();
  const leadsCollection = collection(firestore, 'leads');
  
  const { 'file-upload': file, ...leadData } = validatedFields.data;

  const submissionData = {
      ...leadData,
      fileName: file && file.size > 0 ? file.name : null,
      submittedAt: serverTimestamp()
  };

  addDoc(leadsCollection, submissionData)
    .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
            path: leadsCollection.path,
            operation: 'create',
            requestResourceData: submissionData,
        });
        errorEmitter.emit('permission-error', permissionError);
    });
  
  const { name } = validatedFields.data;
  let successMessage = `Thank you, ${name}! Your inquiry has been received. Our team will get back to you shortly.`;

  if (file && file.size > 0) {
    successMessage += ` Your file '${file.name}' has been submitted.`;
  }

  return {
    status: 'success',
    message: successMessage,
  };
}

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

  const { firestore } = initializeFirebase();
  const applicationsCollection = collection(firestore, 'job_applications');

  const submissionData = {
      ...applicationData,
      cvFileName: cv.name,
      submittedAt: serverTimestamp()
  };
  // NOTE: In a real app, you would upload the CV to Cloud Storage and save the URL.
  // For this prototype, we'll just save the file name.
  addDoc(applicationsCollection, submissionData)
    .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
            path: applicationsCollection.path,
            operation: 'create',
            requestResourceData: submissionData,
        });
        errorEmitter.emit('permission-error', permissionError);
    });

  const { name } = validatedFields.data;
  return {
    status: 'success',
    message: `Thank you, ${name}! Your application has been received. We will be in touch if there is a suitable opening.`,
  };
}
