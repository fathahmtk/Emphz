
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useMemo, useRef } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useCollection, useFirestore } from "@/firebase";
import type { Product } from "@/lib/types";
import { collection, orderBy, query } from "firebase/firestore";
import type { Inquiry } from "@/lib/types";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Submit Inquiry"}
    </Button>
  );
}

interface ContactFormProps {
    prefillData?: Inquiry;
}


export function ContactForm({ prefillData }: ContactFormProps) {
  const initialState = { status: "idle" as const, message: "" };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const firestore = useFirestore();
  const productsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'), orderBy('name'));
  }, [firestore]);

  const { data: products, isLoading: isLoadingProducts } = useCollection<Product>(productsQuery);

  useEffect(() => {
    if (state.status === "error") {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: state.message,
      });
    }
    // Don't reset on success, because the success message will be shown
  }, [state, toast]);

  if (state.status === "success") {
    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Submission Successful!</AlertTitle>
        <AlertDescription>
          <p>{state.message}</p>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Submit Inquiry</CardTitle>
        <CardDescription>
            {prefillData 
             ? "Our AI has pre-filled the form based on your conversation. Please review and submit."
             : "Our technical engineering team will review your requirements and respond promptly."
            }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" name="company" placeholder="ACME Inc." required/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXXXXX" required />
            </div>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input key={`industry-${prefillData?.industry}`} id="industry" name="industry" placeholder="e.g., Power Generation" defaultValue={prefillData?.industry} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="product">Product of Interest</Label>
              <Select name="product" defaultValue={prefillData?.product}>
                <SelectTrigger id="product" disabled={isLoadingProducts}>
                    <SelectValue placeholder={isLoadingProducts ? "Loading products..." : "Select a product"} />
                </SelectTrigger>
                <SelectContent>
                    {products?.map(p => <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>)}
                    <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input key={`quantity-${prefillData?.quantity}`} id="quantity" name="quantity" type="number" placeholder="e.g., 100" defaultValue={prefillData?.quantity} />
            </div>
             <div className="space-y-2">
                <Label htmlFor="location">Project Location</Label>
                <Input key={`location-${prefillData?.location}`} id="location" name="location" placeholder="City, State" defaultValue={prefillData?.location} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry">Description / Requirements</Label>
            <Textarea key={`inquiry-${prefillData?.inquiry}`} id="inquiry" name="inquiry" placeholder="Please describe your requirements in detail..." required minLength={10} defaultValue={prefillData?.inquiry} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file-upload">Upload RFQ / CAD / BOQ</Label>
            <Input id="file-upload" name="file-upload" type="file" className="pt-2"/>
            <p className="text-xs text-muted-foreground">Max file size: 5MB. Allowed types: PDF, DWG, DOCX, XLSX.</p>
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
