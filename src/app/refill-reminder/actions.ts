"use server";

import { monthlyRefillReminder, type MonthlyRefillReminderInput, type MonthlyRefillReminderOutput } from '@/ai/flows/monthly-refill-reminder';
import { z } from "zod";

const formSchema = z.object({
  userName: z.string().min(2),
  userContactInfo: z.string().min(5),
  orderHistory: z.string(),
  typicalUsage: z.string(),
});


export async function getRefillReminder(
  input: MonthlyRefillReminderInput
): Promise<{ data: MonthlyRefillReminderOutput | null; error: string | null; }> {
    const validatedInput = formSchema.safeParse(input);
    if (!validatedInput.success) {
        return { data: null, error: "Invalid input." };
    }

    try {
        const result = await monthlyRefillReminder(validatedInput.data);
        return { data: result, error: null };
    } catch (error) {
        console.error("Error getting refill reminder:", error);
        return { data: null, error: "Failed to generate reminder. Please try again." };
    }
}
