
"use server";

import { generateContentVariation } from "@/ai/flows/admin-assisted-content-creation";
import { generateProductImage } from "@/ai/flows/generate-product-image";
import { doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { firestore } from '@/firebase/server';

export async function generateProductDescription(
  existingContent: string,
  tone?: string
): Promise<{ variation: string } | { error: string }> {
  if (!existingContent) {
    return { error: "Existing content is required." };
  }

  try {
    const result = await generateContentVariation({
      contentType: "productDescription",
      existingContent,
      tone: tone || "professional and technical",
    });
    return { variation: result.variation };
  } catch (e) {
    console.error(e);
    return { error: "Failed to generate content. Please try again." };
  }
}

export async function generateImage(
  productName: string,
  productDescription: string
): Promise<{ imageUrl: string } | { error: string }> {
  if (!productName || !productDescription) {
    return { error: "Product name and description are required." };
  }

  try {
    const result = await generateProductImage({ productName, productDescription });
    return { imageUrl: result.imageUrl };
  } catch (e) {
    console.error(e);
    return { error: "Failed to generate image. Please try again." };
  }
}

export async function saveProduct(
  productId: string,
  productData: { name: string; description: string; specifications: Record<string, string>; imageUrl: string; category: string; }
): Promise<{ success: boolean } | { error: string }> {
  try {
    const productRef = doc(firestore, 'products', productId);
    if (productId === 'new') {
        await setDoc(productRef, productData);
    } else {
        await updateDoc(productRef, productData);
    }
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "Failed to save product. Please try again." };
  }
}

export async function deleteProduct(productId: string): Promise<{ success: boolean } | { error: string }> {
    if (productId === 'new') {
        return { error: 'Cannot delete a new product.' };
    }
    try {
        await deleteDoc(doc(firestore, 'products', productId));
        return { success: true };
    } catch (e) {
        console.error(e);
        return { error: 'Failed to delete product.' };
    }
}
