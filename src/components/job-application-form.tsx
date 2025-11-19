
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitJobApplication } from "@/app/contact/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Check } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Submit Application"}
    </Button>
  );
}

export function JobApplicationForm() {
  const initialState = { status: "idle" as const, message: "" };
  const [state, formAction] = useFormState(submitJobApplication, initialState);
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
        <div className="max-w-xl mx-auto">
            <Alert>
                <Check className="h-4 w-4" />
                <AlertTitle>Application Sent!</AlertTitle>
                <AlertDescription>
                <p>{state.message}</p>
                </AlertDescription>
            </Alert>
        </div>
    );
  }

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Job Application</CardTitle>
        <CardDescription>Fill out the form below to apply for a position at EMPHZ.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1-555-123-4567" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="position">Position Applied For</Label>
                <Input id="position" name="position" placeholder="e.g., GRP Technician" />
            </div>
          </div>
         
          <div className="space-y-2">
            <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
            <Textarea id="cover-letter" name="cover-letter" placeholder="Tell us why you'd be a great fit..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cv">Upload CV / Resume</Label>
            <Input id="cv" name="cv" type="file" required className="pt-2"/>
            <p className="text-xs text-muted-foreground">Required. Max file size: 5MB. PDF, DOCX.</p>
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
