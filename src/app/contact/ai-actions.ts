
'use server';

import { inquiryAssistantFlow } from '@/ai/flows/inquiry-assistant-flow';

export interface Message {
  role: 'user' | 'model';
  content: string;
}

export type Inquiry = {
    inquiry: string;
    product?: string;
    quantity?: string;
    industry?: string;
    location?: string;
    [key: string]: any;
}

interface ActionResult {
  messages: Message[];
  isComplete: boolean;
  inquiryData?: Inquiry;
  error?: string;
}

export async function continueConversation(
  history: Message[],
  userInput: string
): Promise<ActionResult> {
  try {
    const response = await inquiryAssistantFlow({
      history,
      userInput,
    });

    const newHistory: Message[] = [
        ...history,
        { role: 'user', content: userInput },
        { role: 'model', content: response.response },
    ];
    
    return {
      messages: newHistory,
      isComplete: response.isComplete,
      inquiryData: response.inquiryData,
    };

  } catch (e: any) {
    console.error('Error in AI conversation flow:', e);
    return {
      messages: history,
      isComplete: false,
      error: 'An unexpected error occurred. Please try again or fill out the manual form.',
    };
  }
}
