"use client";

import { useState } from "react";
import { type Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Bot, Loader2, Sparkles } from "lucide-react";
import { generateProductDescription } from "./actions";
import Image from "next/image";

export function EditProductForm({ product }: { product: Product }) {
  const [description, setDescription] = useState(product.description);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await generateProductDescription(description);
    setIsGenerating(false);

    if ("variation" in result) {
      setDescription(result.variation);
      toast({
        title: "Content Generated",
        description: "A new product description has been generated.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }
  };

  const handleSaveChanges = () => {
    toast({
        title: "Changes Saved",
        description: `Product "${product.name}" has been updated. (Demo)`,
    })
  }

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
      <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>Edit the name, description, and other details of the product.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" defaultValue={product.name} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="description">Description</Label>
                <Button variant="ghost" size="sm" onClick={handleGenerate} disabled={isGenerating}>
                  {isGenerating ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4 text-amber-500" />
                  )}
                  Generate with AI
                </Button>
              </div>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={6} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label>{key}</Label>
                <Input defaultValue={value} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Product Image</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                data-ai-hint={product.imageHint}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <Button variant="outline" className="w-full mt-4">Change Image</Button>
          </CardContent>
        </Card>
        <Button onClick={handleSaveChanges} size="lg">Save Changes</Button>
      </div>
    </div>
  );
}
