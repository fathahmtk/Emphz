
'use client';

import { useState, useRef, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { continueConversation } from '@/app/contact/ai-actions';
import type { Message, Inquiry } from '@/app/contact/ai-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Bot, Loader2, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { ContactForm } from './contact-form';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
    </Button>
  );
}

export function InquiryAssistant() {
  const [conversation, setConversation] = useState<Message[]>([
    { role: 'model', content: 'Hello! I am your AI project assistant. To start, please briefly describe your project or what you are looking for.' }
  ]);
  const [error, setError] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [finalInquiry, setFinalInquiry] = useState<Inquiry | undefined>(undefined);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleFormAction = async (formData: FormData) => {
    const userMessage = formData.get('message') as string;
    if (!userMessage) return;

    // Add user message to conversation
    setConversation(prev => [...prev, { role: 'user', content: userMessage }]);
    setError(null);

    const { messages, isComplete, inquiryData, error } = await continueConversation(conversation, userMessage);

    if (error) {
        setError(error);
        return;
    }
    
    setConversation(messages);

    if(isComplete && inquiryData) {
        setIsComplete(true);
        setFinalInquiry(inquiryData);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat on new message
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [conversation]);


  if (isComplete && finalInquiry) {
    return (
      <div className="space-y-8">
        <div className="text-center flex flex-col items-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
                I've gathered all the necessary details. Please review the pre-filled form below and click "Submit Inquiry" to send it to our team.
            </p>
        </div>
        <ContactForm prefillData={finalInquiry} />
      </div>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>AI Project Assistant</CardTitle>
        <CardDescription>Chat with our assistant to refine your project requirements.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96 w-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {conversation.map((message, index) => (
              <div key={index} className={cn("flex items-start gap-3", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                {message.role === 'model' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                <div className={cn("p-3 rounded-lg max-w-[85%]", message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === 'user' && <User className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form action={handleFormAction} className="w-full flex items-center gap-2">
          <Input name="message" placeholder="Type your message..." autoComplete="off" />
          <SubmitButton />
        </form>
      </CardFooter>
       {error && (
        <CardFooter>
            <div className="text-sm text-destructive flex items-center gap-2">
                <AlertTriangle className="h-4 w-4"/> {error}
            </div>
        </CardFooter>
      )}
    </Card>
  );
}
