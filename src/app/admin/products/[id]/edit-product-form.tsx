
"use client";

import { useState } from "react";
import { type Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Trash2, ImageIcon } from "lucide-react";
import { saveProduct, deleteProduct } from "./actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function EditProductForm({ product: initialProduct }: { product: Product }) {
  const [product, setProduct] = useState(initialProduct);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const isNewProduct = product.id === 'new';

  const handleInputChange = (field: keyof Omit<Product, 'id'>, value: any) => {
    setProduct(prev => ({...prev, [field]: value}));
  }

  const handleSpecChange = (key: string, value: string) => {
    setProduct(prev => ({...prev, specifications: {...prev.specifications, [key]: value}}));
  }

  const handleSaveChanges = async () => {
    setIsSaving(true);
    const { id, ...productData } = product;
    const result = await saveProduct(id, productData);
    setIsSaving(false);

    if("success" in result) {
        toast({
            title: "Changes Saved",
            description: `Product "${product.name}" has been updated.`,
        })
        if (isNewProduct && result.id) {
            router.push(`/admin/products/${result.id}`);
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
             <div className="space-y-2">
                <Label>Image URL</Label>
                <Input value={product.imageUrl} onChange={(e) => handleInputChange('imageUrl', e.target.value)} />
            </div>
            <div className="relative aspect-video w-full mt-2">
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
          </CardContent>
        </Card>
        <div className="flex flex-col gap-2">
            <Button onClick={handleSaveChanges} size="lg" disabled={isSaving}>
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
