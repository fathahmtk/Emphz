// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview Provides AI-assisted content creation for admins to generate product descriptions and project case studies.
 *
 * - generateContentVariation - A function that generates content variations.
 * - ContentVariationInput - The input type for the generateContentVariation function.
 * - ContentVariationOutput - The return type for the generateContentVariation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentVariationInputSchema = z.object({
  contentType: z
    .enum(['productDescription', 'projectCaseStudy'])
    .describe('The type of content to generate a variation for.'),
  existingContent: z
    .string()
    .describe('The existing content to generate a variation from.'),
  tone: z
    .string()
    .optional()
    .describe('Optional tone or style to apply to the generated content.'),
});
export type ContentVariationInput = z.infer<typeof ContentVariationInputSchema>;

const ContentVariationOutputSchema = z.object({
  variation: z.string().describe('The generated content variation.'),
});
export type ContentVariationOutput = z.infer<typeof ContentVariationOutputSchema>;

export async function generateContentVariation(
  input: ContentVariationInput
): Promise<ContentVariationOutput> {
  return generateContentVariationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentVariationPrompt',
  input: {schema: ContentVariationInputSchema},
  output: {schema: ContentVariationOutputSchema},
  prompt: `You are an AI assistant helping an admin generate variations of existing content for their website.

The admin wants to create engaging and diverse content for their product descriptions and project case studies.

The content type is: {{{contentType}}}
The existing content is: {{{existingContent}}}

{{#if tone}}
The admin has requested the following tone: {{{tone}}}
{{/if}}

Generate a variation of the existing content, keeping the content fresh and helpful.

Variation:`,
});

const generateContentVariationFlow = ai.defineFlow(
  {
    name: 'generateContentVariationFlow',
    inputSchema: ContentVariationInputSchema,
    outputSchema: ContentVariationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
