
'use server';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';
import { firestore } from '@/firebase/server';

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
  });

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      status: 'error',
      message: firstError || 'Invalid form data. Please check all fields.',
    };
  }

  // File upload handling would go here in a real app.
  // For this demo, we'll skip it but acknowledge it.
  const file = formData.get('file-upload') as File | null;
  let fileInfo = 'No file uploaded.';
  if (file && file.size > 0) {
      fileInfo = `File uploaded: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      // Here you would upload to Firebase Storage and get the URL.
  }

  const { name, email, company, phone, industry, product, quantity, location, inquiry } = validatedFields.data;

  try {
    if (firestore) {
      const leadsCollection = collection(firestore, 'leads');
      await addDoc(leadsCollection, {
        name,
        email,
        company,
        phone,
        industry,
        product,
        quantity: quantity ? parseInt(quantity, 10) : null,
        location,
        inquiry: `${inquiry}\n\n${fileInfo}`, // Append file info to inquiry
        submittedAt: serverTimestamp(),
      });
    }

    return {
      status: 'success',
      message: `Thank you, ${name}! Your inquiry has been received. Our team will get back to you shortly.`,
    };
  } catch (error) {
    console.error('Error saving lead:', error);
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
