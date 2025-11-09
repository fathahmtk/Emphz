'use server';

/**
 * @fileOverview A smart lead categorization AI agent.
 *
 * - categorizeLead - A function that handles the lead categorization process.
 * - SmartLeadCategorizationInput - The input type for the categorizeLead function.
 * - SmartLeadCategorizationOutput - The return type for the categorizeLead function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartLeadCategorizationInputSchema = z.object({
  inquiry: z.string().describe('The inquiry from the contact form submission.'),
  companyProfile: z.string().describe('The profile of the company making the inquiry.'),
  contactInformation: z.string().describe('Contact information of the submitter.'),
});
export type SmartLeadCategorizationInput = z.infer<typeof SmartLeadCategorizationInputSchema>;

const SmartLeadCategorizationOutputSchema = z.object({
  leadCategory: z.string().describe('The category of the lead based on the inquiry and company profile.'),
  priority: z.enum(['high', 'medium', 'low']).describe('The priority of the lead for outreach.'),
  notes: z.string().describe('Any additional notes or recommendations for the marketing team.'),
  addToCampaign: z.boolean().describe('Whether the contact information should be added to a marketing campaign.'),
});
export type SmartLeadCategorizationOutput = z.infer<typeof SmartLeadCategorizationOutputSchema>;

export async function categorizeLead(input: SmartLeadCategorizationInput): Promise<SmartLeadCategorizationOutput> {
  return categorizeLeadFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartLeadCategorizationPrompt',
  input: {schema: SmartLeadCategorizationInputSchema},
  output: {schema: SmartLeadCategorizationOutputSchema},
  prompt: `You are an expert marketing analyst specializing in lead categorization.

You will analyze the inquiry and company profile to categorize the lead, determine its priority, and provide notes for the marketing team.

Inquiry: {{{inquiry}}}
Company Profile: {{{companyProfile}}}
Contact Information: {{{contactInformation}}}

Based on the inquiry and company profile, determine the most appropriate lead category (e.g., "New Product Interest", "Technical Support", "Partnership Opportunity").  Also determine whether the contact information should be added to a marketing campaign, given the nature of the lead.

Set the priority field to "high", "medium", or "low" based on the potential value of the lead.

Provide any additional notes or recommendations for the marketing team in the notes field.

Output in JSON format.
`,
});

const categorizeLeadFlow = ai.defineFlow(
  {
    name: 'categorizeLeadFlow',
    inputSchema: SmartLeadCategorizationInputSchema,
    outputSchema: SmartLeadCategorizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
