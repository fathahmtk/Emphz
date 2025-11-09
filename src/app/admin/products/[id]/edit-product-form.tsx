
"use client";

import { useState } from "react";
import { type Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Bot, Loader2, Sparkles, Trash2, ImageIcon } from "lucide-react";
import { generateProductDescription, generateImage, saveProduct, deleteProduct } from "./actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function EditProductForm({ product: initialProduct }: { product: Product }) {
  const [product, setProduct] = useState(initialProduct);
  const [isGeneratingDesc, setIsGeneratingDesc] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const isNewProduct = product.id === 'new';

  const handleInputChange = (field: keyof Product, value: any) => {
    setProduct(prev => ({...prev, [field]: value}));
  }

  const handleSpecChange = (key: string, value: string) => {
    setProduct(prev => ({...prev, specifications: {...prev.specifications, [key]: value}}));
  }

  const handleGenerateDesc = async () => {
    setIsGeneratingDesc(true);
    const result = await generateProductDescription(product.description);
    setIsGeneratingDesc(false);

    if ("variation" in result) {
      handleInputChange('description', result.variation);
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

  const handleGenerateImage = async () => {
    setIsGeneratingImage(true);
    const result = await generateImage(product.name, product.description);
    setIsGeneratingImage(false);

    if ("imageUrl" in result) {
        handleInputChange('imageUrl', result.imageUrl);
      toast({
        title: "Image Generated",
        description: "A new product image has been generated.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }
  };

  const handleSaveChanges = async () => {
    setIsSaving(true);
    const result = await saveProduct(product.id, {
        name: product.name,
        description: product.description,
        specifications: product.specifications,
        imageUrl: product.imageUrl,
        category: product.category,
    });
    setIsSaving(false);

    if("success" in result) {
        toast({
            title: "Changes Saved",
            description: `Product "${product.name}" has been updated.`,
        })
        if (isNewProduct) {
            router.push('/admin/products');
        }
    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.error,
        })
    }
  }

  const handleDelete = async () => {
    if(!window.confirm(`Are you sure you want to delete "${product.name}"? This cannot be undone.`)) {
        return;
    }
    setIsDeleting(true);
    const result = await deleteProduct(product.id);
    setIsDeleting(false);

    if ("success" in result) {
        toast({
            title: "Product Deleted",
            description: `Product "${product.name}" has been deleted.`,
        });
        router.push('/admin/products');
    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.error,
        })
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
      <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{isNewProduct ? 'Create Product' : 'Product Details'}</CardTitle>
            <CardDescription>{isNewProduct ? 'Add a new product to your catalog.' : 'Edit the name, description, and other details of the product.'}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" value={product.name} onChange={(e) => handleInputChange('name', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" value={product.category} onChange={(e) => handleInputChange('category', e.target.value)} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="description">Description</Label>
                <Button variant="ghost" size="sm" onClick={handleGenerateDesc} disabled={isGeneratingDesc}>
                  {isGeneratingDesc ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4 text-amber-500" />
                  )}
                  Generate with AI
                </Button>
              </div>
              <Textarea id="description" value={product.description} onChange={(e) => handleInputChange('description', e.target.value)} rows={6} />
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
                <Input value={value} onChange={(e) => handleSpecChange(key, e.target.value)} />
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
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  data-ai-hint={product.imageHint}
                  fill
                  className="object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-full bg-muted rounded-md flex items-center justify-center">
                    <ImageIcon className="text-muted-foreground" />
                </div>
              )}
            </div>
            <Button variant="ghost" className="w-full mt-4" onClick={handleGenerateImage} disabled={isGeneratingImage}>
              {isGeneratingImage ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4 text-amber-500" />
              )}
              Generate with AI
            </Button>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-2">
            <Button onClick={handleSaveChanges} size="lg" disabled={isSaving || isGeneratingDesc || isGeneratingImage}>
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isNewProduct ? 'Create Product' : 'Save Changes'}
            </Button>
            {!isNewProduct && (
                <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
                    {isDeleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 />}
                    Delete Product
                </Button>
            )}
        </div>
      </div>
    </div>
  );
}
