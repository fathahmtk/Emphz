
"use server";

import { generateContentVariation } from "@/ai/flows/admin-assisted-content-creation";
import { doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { firestore } from '@/firebase/server';
import type { Project } from "@/lib/types";

export async function generateProjectDescription(
  existingContent: string,
  tone?: string
): Promise<{ variation: string } | { error: string }> {
  if (!existingContent) {
    return { error: "Existing content is required." };
  }

  try {
    const result = await generateContentVariation({
      contentType: "projectCaseStudy",
      existingContent,
      tone: tone || "engaging and results-oriented",
    });
    return { variation: result.variation };
  } catch (e) {
    console.error(e);
    return { error: "Failed to generate content. Please try again." };
  }
}

export async function saveProject(
    projectId: string,
    projectData: Omit<Project, 'id'>
): Promise<{ success: boolean } | { error: string }> {
  try {
    if (projectId === 'new') {
        const newDocRef = doc(firestore, 'projects', new Date().getTime().toString());
        await setDoc(newDocRef, projectData);
    } else {
        const projectRef = doc(firestore, 'projects', projectId);
        await updateDoc(projectRef, projectData);
    }
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "Failed to save project. Please try again." };
  }
}

export async function deleteProject(projectId: string): Promise<{ success: boolean } | { error: string }> {
    if (projectId === 'new') {
        return { error: 'Cannot delete a new project.' };
    }
    try {
        await deleteDoc(doc(firestore, 'projects', projectId));
        return { success: true };
    } catch (e) {
        console.error(e);
        return { error: 'Failed to delete project.' };
    }
}
