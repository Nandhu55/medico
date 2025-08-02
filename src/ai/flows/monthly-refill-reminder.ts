'use server';

/**
 * @fileOverview A monthly medicine refill reminder AI agent.
 *
 * - monthlyRefillReminder - A function that sends monthly medicine refill reminders.
 * - MonthlyRefillReminderInput - The input type for the monthlyRefillReminder function.
 * - MonthlyRefillReminderOutput - The return type for the monthlyRefillReminder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MonthlyRefillReminderInputSchema = z.object({
  orderHistory: z
    .string()
    .describe(
      'The user order history, as a JSON string.  Must include medicine names, quantities, and dates of purchase.'
    ),
  typicalUsage: z
    .string()
    .describe(
      'The typical usage of each medicine, as a JSON string. Must include medicine names and dosage frequency.'
    ),
  userName: z.string().describe('The name of the user.'),
  userContactInfo: z.string().describe('The user contact information (email or phone number).'),
});
export type MonthlyRefillReminderInput = z.infer<typeof MonthlyRefillReminderInputSchema>;

const MonthlyRefillReminderOutputSchema = z.object({
  reminderMessage: z.string().describe('The content of the reminder message.'),
  deliveryChannel: z.string().describe('The channel to send the reminder (email or SMS).'),
});
export type MonthlyRefillReminderOutput = z.infer<typeof MonthlyRefillReminderOutputSchema>;

export async function monthlyRefillReminder(
  input: MonthlyRefillReminderInput
): Promise<MonthlyRefillReminderOutput> {
  return monthlyRefillReminderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'monthlyRefillReminderPrompt',
  input: {schema: MonthlyRefillReminderInputSchema},
  output: {schema: MonthlyRefillReminderOutputSchema},
  prompt: `You are a helpful assistant that reminds users to refill their medicine.

  Based on the user's order history and typical usage, determine which medicines the user needs to refill and generate a reminder message.

  Order History: {{{orderHistory}}}
  Typical Usage: {{{typicalUsage}}}
  User Name: {{{userName}}}
  User Contact Info: {{{userContactInfo}}}

  Consider:
  - Dosage frequency to determine refill needs
  - Account for any recent orders

  Output the reminder message and delivery channel.
  Delivery channel should be email or SMS depending on the user contact info.
  `,
});

const monthlyRefillReminderFlow = ai.defineFlow(
  {
    name: 'monthlyRefillReminderFlow',
    inputSchema: MonthlyRefillReminderInputSchema,
    outputSchema: MonthlyRefillReminderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
