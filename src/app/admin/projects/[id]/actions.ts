"use server";

import { generateContentVariation } from "@/ai/flows/admin-assisted-content-creation";

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
