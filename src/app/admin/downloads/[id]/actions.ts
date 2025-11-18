
"use server";

import { doc, updateDoc, setDoc, deleteDoc, collection, DocumentReference } from 'firebase/firestore';
import { firestore } from '@/firebase/server';
import type { TechnicalDownload } from "@/lib/types";

export async function saveDownload(
    downloadId: string,
    downloadData: Omit<TechnicalDownload, 'id'>
): Promise<{ success: boolean, id?: string } | { error: string }> {
  try {
    let downloadRef: DocumentReference;
    if (downloadId === 'new') {
        downloadRef = doc(collection(firestore, 'technical_downloads'));
        await setDoc(downloadRef, downloadData);
        return { success: true, id: downloadRef.id };
    } else {
        downloadRef = doc(firestore, 'technical_downloads', downloadId);
        await updateDoc(downloadRef, downloadData);
        return { success: true };
    }
  } catch (e: any) {
    console.error(e);
    return { error: "Failed to save download. " + e.message };
  }
}

export async function deleteDownload(downloadId: string): Promise<{ success: boolean } | { error: string }> {
    if (downloadId === 'new') {
        return { error: 'Cannot delete a new download.' };
    }
    try {
        await deleteDoc(doc(firestore, 'technical_downloads', downloadId));
        return { success: true };
    } catch (e: any) {
        console.error(e);
        return { error: 'Failed to delete download. ' + e.message };
    }
}
