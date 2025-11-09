"use server";

import { categorizeLead } from "@/ai/flows/smart-lead-categorization";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  company: z.string().optional(),
  inquiry: z.string().min(10, "Inquiry must be at least 10 characters."),
});

type State = {
  status: "idle" | "success" | "error";
  message: string;
  leadCategory?: string;
  priority?: "high" | "medium" | "low";
};

export async function submitContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    inquiry: formData.get("inquiry"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid form data.",
    };
  }
  
  const { name, email, company, inquiry } = validatedFields.data;

  try {
    const aiResult = await categorizeLead({
      inquiry,
      companyProfile: company || "Not provided",
      contactInformation: `Name: ${name}, Email: ${email}`,
    });

    console.log("AI Lead Categorization:", aiResult);

    // Here you would typically save the lead to a database (e.g., Firestore)
    // and send email notifications.
    // For this demo, we'll just return the AI's analysis.

    return {
      status: "success",
      message: `Thank you, ${name}! Your inquiry has been received. Our team will get back to you shortly.`,
      leadCategory: aiResult.leadCategory,
      priority: aiResult.priority,
    };
  } catch (error) {
    console.error("Error categorizing lead:", error);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
