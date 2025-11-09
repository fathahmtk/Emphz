
'use server';
/**
 * @fileOverview A tool that provides real-time product information from Firestore.
 *
 * - getProductInformation - A tool that fetches product details from the database.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { firestore } from '@/firebase/server';
import { Product } from '@/lib/types';

export const getProductInformation = ai.defineTool(
  {
    name: 'getProductInformation',
    description:
      "Retrieves real-time information about the company's products from the database. Use this to answer any user question about product details, specifications, or availability.",
    inputSchema: z.object({
      productName: z
        .string()
        .optional()
        .describe(
          'The name of the product to search for. If not provided, a summary of all products will be returned.'
        ),
    }),
    outputSchema: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        category: z.string(),
        specifications: z.record(z.string()),
      })
    ),
  },
  async (input) => {
    const productsCollection = firestore.collection('products');
    let productDocs;

    if (input.productName) {
      // Create a case-insensitive search by finding products where the name is >= input and < input + '~'
      const endStr = input.productName.slice(0, -1) + String.fromCharCode(input.productName.slice(-1).charCodeAt(0) + 1);
      const query = productsCollection
        .where('name', '>=', input.productName)
        .where('name', '<', endStr);
      const snapshot = await query.get();
      productDocs = snapshot.docs;
    } else {
      const snapshot = await productsCollection.get();
      productDocs = snapshot.docs;
    }

    if (productDocs.empty) {
      return [{ 
        name: "Not Found",
        description: `No product matching "${input.productName}" was found.`,
        category: "",
        specifications: {},
      }];
    }

    return productDocs.map(doc => {
      const data = doc.data() as Product;
      return {
        name: data.name,
        description: data.description,
        category: data.category,
        specifications: data.specifications,
      };
    });
  }
);
