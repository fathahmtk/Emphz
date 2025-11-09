"use server";

import { generateContentVariation } from "@/ai/flows/admin-assisted-content-creation";

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
