
'use server';
/**
 * @fileOverview An AI assistant flow for handling customer project inquiries.
 *
 * - inquiryAssistantFlow - A function that manages a conversation to gather project details.
 */

import { ai } from '@/ai/genkit';
import { getFirestore } from '@/firebase/server';
import { z } from 'zod';
import type { Product } from '@/lib/types';

// //////////////////////////////////////////////////////////////////
// Input and Output Schemas
// //////////////////////////////////////////////////////////////////

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const InquiryAssistantInputSchema = z.object({
  history: z.array(MessageSchema),
  userInput: z.string(),
});

const InquiryDataSchema = z.object({
  inquiry: z.string().describe("The user's core project description, including all important details."),
  product: z.string().optional().describe('The specific product the user is interested in.'),
  quantity: z.string().optional().describe('The estimated quantity of products needed.'),
  industry: z.string().optional().describe("The user's industry (e.g., Construction, Tourism, Solar)."),
  location: z.string().optional().describe("The project's physical location (e.g., city, state)."),
});

const InquiryAssistantOutputSchema = z.object({
  response: z.string().describe('The content of the AI assistant\'s next message in the conversation.'),
  isComplete: z.boolean().describe('Set to true only when all required information (inquiry, product, quantity, industry, location) has been gathered.'),
  inquiryData: InquiryDataSchema.optional().describe('The structured data collected from the user. Only include if isComplete is true.'),
});

// //////////////////////////////////////////////////////////////////
// Tool Definition
// //////////////////////////////////////////////////////////////////

async function getProductCatalog(): Promise<string> {
  const firestore = getFirestore();
  const productsSnapshot = await firestore.collection('products').select('name', 'overview').get();
  const products = productsSnapshot.docs.map(doc => doc.data() as Pick<Product, 'name' | 'overview'>);
  return JSON.stringify(products);
}

const getProductCatalogTool = ai.defineTool(
  {
    name: 'getProductCatalog',
    description: 'Retrieves a list of available products from the company catalog to help the user choose.',
    outputSchema: z.string(),
  },
  getProductCatalog
);

// //////////////////////////////////////////////////////////////////
// Prompt Definition
// //////////////////////////////////////////////////////////////////

const inquiryAssistantPrompt = ai.definePrompt({
  name: 'inquiryAssistantPrompt',
  input: { schema: InquiryAssistantInputSchema },
  output: { schema: InquiryAssistantOutputSchema },
  tools: [getProductCatalogTool],
  prompt: `You are an expert AI assistant for EMPHZ, a GRP (Glass-Reinforced Plastic) solutions provider. Your goal is to guide a potential customer through the project inquiry process in a friendly, conversational manner.

You must collect the following information:
- A detailed description of their project/needs (the 'inquiry').
- The specific product they are interested in.
- The estimated quantity.
- Their industry.
- The project location.

Follow these steps:
1. Start by acknowledging the user's message.
2. Ask clarifying questions one at a time to gather the required information. Be natural and conversational, not robotic.
3. If the user is unsure about which product they need, use the 'getProductCatalog' tool to see available products and help them decide.
4. Once you have gathered ALL the required pieces of information, and only then, set 'isComplete' to true and populate the 'inquiryData' object.
5. Your final message before setting isComplete to true should be a summary of the details you've collected, asking the user for confirmation. For example: "Great, I have all the details. Just to confirm: you're looking for [quantity] of [product] for a [industry] project in [location] for [inquiry]. Is that correct?". If the user confirms, your *next* response should set isComplete to true.
6. Keep your responses concise and to the point.

Conversation History:
{{#each history}}
{{role}}: {{content}}
{{/each}}

New User Message:
{{userInput}}`,
});

// //////////////////////////////////////////////////////////////////
// Flow Definition
// //////////////////////////////////////////////////////////////////

export const inquiryAssistantFlow = ai.defineFlow(
  {
    name: 'inquiryAssistantFlow',
    inputSchema: InquiryAssistantInputSchema,
    outputSchema: InquiryAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await inquiryAssistantPrompt(input);
    
    if (!output) {
      throw new Error("The AI model did not return a valid response.");
    }
    
    // If the model indicates completion, ensure the data object is present.
    if (output.isComplete && !output.inquiryData) {
        // In a real-world scenario, you might have more complex logic here.
        // For now, we'll assume the final summary is in the `response` and parse it.
        // This is a fallback and ideally the model should populate inquiryData correctly.
        console.warn("AI indicated completion but did not provide structured data. This may lead to an empty form.");
        output.inquiryData = { inquiry: output.response };
    }

    return output;
  }
);
