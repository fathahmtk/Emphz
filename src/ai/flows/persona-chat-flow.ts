'use server';
/**
 * @fileOverview An AI chat flow that adopts a specific persona to answer user questions about GRP products.
 *
 * - personaChat - A function that handles the AI persona chat interaction.
 * - PersonaChatInput - The input type for the personaChat function.
 * - PersonaChatOutput - The return type for the personaChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonaChatInputSchema = z.object({
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })
    )
    .describe('The chat history between the user and the model.'),
  prompt: z.string().describe('The latest user prompt.'),
});
export type PersonaChatInput = z.infer<typeof PersonaChatInputSchema>;

const PersonaChatOutputSchema = z.object({
  response: z.string().describe('The AI-generated response.'),
});
export type PersonaChatOutput = z.infer<typeof PersonaChatOutputSchema>;

export async function personaChat(
  input: PersonaChatInput
): Promise<PersonaChatOutput> {
  return personaChatFlow(input);
}

const personaChatPrompt = ai.definePrompt({
  name: 'personaChatPrompt',
  input: {schema: PersonaChatInputSchema},
  output: {schema: PersonaChatOutputSchema},
  system: `You are "Ron", a seasoned GRP (Glass Reinforced Plastic) expert with 30 years of experience at Emphz. You are knowledgeable, confident, and slightly informal, like a trusted senior colleague. Your goal is to answer user questions about Emphz's GRP products and services clearly and helpfully.

- Always maintain the persona of Ron.
- Keep your answers concise and to the point.
- If you don't know an answer, say so honestly and offer to connect the user with a human expert.
- Refer to Emphz products and capabilities when relevant.`,
  prompt: `
{{#each history}}
  {{#if (eq role 'user')}}
    User: {{{content}}}
  {{else}}
    Ron: {{{content}}}
  {{/if}}
{{/each}}
User: {{{prompt}}}
Ron:`,
});

const personaChatFlow = ai.defineFlow(
  {
    name: 'personaChatFlow',
    inputSchema: PersonaChatInputSchema,
    outputSchema: PersonaChatOutputSchema,
  },
  async input => {
    const {history, prompt} = input;
    const llmResponse = await ai.generate({
      prompt: {
        ...personaChatPrompt.prompt,
        input: {
          history,
          prompt,
        },
      },
      history,
      config: {
        temperature: 0.5,
      },
    });

    return {
      response: llmResponse.text,
    };
  }
);
