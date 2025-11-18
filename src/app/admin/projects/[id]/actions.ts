
"use server";

import { doc, updateDoc, setDoc, deleteDoc, collection, DocumentReference } from 'firebase/firestore';
import { firestore } from '@/firebase/server';
import type { Project } from "@/lib/types";

export async function saveProject(
    projectId: string,
    projectData: Omit<Project, 'id'>
): Promise<{ success: boolean, id?: string } | { error: string }> {
  try {
    let projectRef: DocumentReference;
    if (projectId === 'new') {
        projectRef = doc(collection(firestore, 'projects'));
        await setDoc(projectRef, projectData);
        return { success: true, id: projectRef.id };
    } else {
        projectRef = doc(firestore, 'projects', projectId);
        await updateDoc(projectRef, projectData);
        return { success: true };
    }
  } catch (e: any) {
    console.error(e);
    return { error: "Failed to save project. " + e.message };
  }
}

export async function deleteProject(projectId: string): Promise<{ success: boolean } | { error: string }> {
    if (projectId === 'new') {
        return { error: 'Cannot delete a new project.' };
    }
    try {
        await deleteDoc(doc(firestore, 'projects', projectId));
        return { success: true };
    } catch (e: any) {
        console.error(e);
        return { error: 'Failed to delete project. ' + e.message };
    }
}
