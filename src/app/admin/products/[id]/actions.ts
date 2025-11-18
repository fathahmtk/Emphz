
"use server";

import { doc, updateDoc, setDoc, deleteDoc, DocumentReference, collection } from 'firebase/firestore';
import { authedDb } from '@/firebase/admin-db';
import { Product } from '@/lib/types';

export async function saveProduct(
  productId: string,
  productData: Omit<Product, 'id'>
): Promise<{ success: boolean; id?: string } | { error: string }> {
  try {
    const { firestore } = await authedDb.get();
    let productRef: DocumentReference;

    if (productId === 'new') {
        productRef = doc(collection(firestore, 'products'));
        await setDoc(productRef, productData);
        return { success: true, id: productRef.id };
    } else {
        productRef = doc(firestore, 'products', productId);
        await updateDoc(productRef, productData);
        return { success: true };
    }
  } catch (e: any) {
    console.error(e);
    return { error: "Failed to save product. " + e.message };
  }
}

export async function deleteProduct(productId: string): Promise<{ success: boolean } | { error: string }> {
    if (productId === 'new') {
        return { error: 'Cannot delete a new product.' };
    }
    try {
        const { firestore } = await authedDb.get();
        await deleteDoc(doc(firestore, 'products', productId));
        return { success: true };
    } catch (e: any) {
        console.error(e);
        return { error: 'Failed to delete product. ' + e.message };
    }
}
