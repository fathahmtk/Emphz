
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  personaChat,
  type PersonaChatInput,
} from '@/ai/flows/persona-chat-flow';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, Loader2, Send, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

type ChatMessage = {
  role: 'user' | 'model';
  content: string;
};

const FormSchema = z.object({
  prompt: z.string().min(1, 'Message cannot be empty.'),
});
type FormValues = z.infer<typeof FormSchema>;

export default function AIPersonaChatPage() {
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const userMessage: ChatMessage = { role: 'user', content: data.prompt };
    const newHistory = [...history, userMessage];
    setHistory(newHistory);
    setIsLoading(true);
    reset();

    try {
      const input: PersonaChatInput = {
        history: newHistory,
        prompt: data.prompt,
      };
      const result = await personaChat(input);
      const modelMessage: ChatMessage = {
        role: 'model',
        content: result.response,
      };
      setHistory(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error calling AI chat flow:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred.',
        description:
          'Could not get a response from the AI. Please try again.',
      });
      // Remove the user message if the API call fails
      setHistory(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-4xl px-4 md:px-6 py-12 md:py-20 flex flex-col h-[calc(100vh-8rem)]">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Chat with Our GRP Expert
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                Ask &quot;Ron,&quot; our AI-powered specialist, anything about GRP products.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex-1 flex flex-col bg-card/60 backdrop-blur-xl border border-border/20 rounded-lg shadow-lg overflow-hidden">
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                {history.map((msg, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-4',
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {msg.role === 'model' && (
                      <Avatar className="w-10 h-10 border-2 border-primary/50">
                        <AvatarFallback>
                          <Bot className="text-primary" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        'max-w-lg p-4 rounded-xl',
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      )}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                     {msg.role === 'user' && (
                      <Avatar className="w-10 h-10">
                        <AvatarFallback>
                          <User />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-4 justify-start">
                     <Avatar className="w-10 h-10 border-2 border-primary/50">
                        <AvatarFallback>
                          <Bot className="text-primary" />
                        </AvatarFallback>
                      </Avatar>
                    <div className="max-w-lg p-4 rounded-xl bg-muted flex items-center">
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 bg-background/50 border-t border-border/20">
              <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
                <Input
                  {...register('prompt')}
                  placeholder="Ask about our GRP pipes, tanks, or anything else..."
                  className="flex-1 bg-background/70 focus-visible:ring-primary"
                  autoComplete="off"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-5 w-5" />
                </Button>
              </form>
               {errors.prompt && (
                  <p className="text-xs text-destructive mt-2">{errors.prompt.message}</p>
                )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
