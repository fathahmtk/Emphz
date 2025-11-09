"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const initialState = { status: "idle" as const, message: "" };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "error") {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: state.message,
      });
    }
  }, [state, toast]);

  if (state.status === "success") {
    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Submission Successful!</AlertTitle>
        <AlertDescription>
          <p>{state.message}</p>
          <div className="mt-4 text-xs bg-muted p-3 rounded-md">
            <p className="font-semibold">AI Lead Analysis:</p>
            <p><strong>Category:</strong> {state.leadCategory}</p>
            <p><strong>Priority:</strong> {state.priority}</p>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Send us a message</CardTitle>
        <CardDescription>We'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company (Optional)</Label>
            <Input id="company" name="company" placeholder="ACME Inc." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry">Inquiry</Label>
            <Textarea id="inquiry" name="inquiry" placeholder="How can we help you?" required minLength={10} />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
