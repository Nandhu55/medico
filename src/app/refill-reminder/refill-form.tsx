'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getRefillReminder } from "./actions";
import type { MonthlyRefillReminderOutput } from '@/ai/flows/monthly-refill-reminder';
import { Loader2, Terminal } from "lucide-react";

const defaultOrderHistory = JSON.stringify([
    { "medicine": "Metformin 500mg", "quantity": 60, "purchaseDate": "2023-03-15" },
    { "medicine": "Lisinopril 10mg", "quantity": 30, "purchaseDate": "2023-03-20" }
], null, 2);

const defaultTypicalUsage = JSON.stringify([
    { "medicine": "Metformin 500mg", "dosage": "1 tablet twice daily" },
    { "medicine": "Lisinopril 10mg", "dosage": "1 tablet once daily" }
], null, 2);

const formSchema = z.object({
  userName: z.string().min(2, { message: "User name must be at least 2 characters." }),
  userContactInfo: z.string().min(5, { message: "Please enter a valid contact info (email or phone)." }),
  orderHistory: z.string().refine((val) => {
    try { JSON.parse(val); return true; } catch { return false; }
  }, { message: "Order history must be valid JSON." }),
  typicalUsage: z.string().refine((val) => {
    try { JSON.parse(val); return true; } catch { return false; }
  }, { message: "Typical usage must be valid JSON." }),
});

export function RefillForm() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<MonthlyRefillReminderOutput | null>(null);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: "",
            userContactInfo: "",
            orderHistory: defaultOrderHistory,
            typicalUsage: defaultTypicalUsage,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        setError(null);
        setResult(null);
        
        const response = await getRefillReminder(values);

        if(response.error) {
            setError(response.error);
        } else {
            setResult(response.data);
        }
        
        setLoading(false);
    }
    
    return (
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="font-headline">Generate Reminder</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <FormField
                                control={form.control}
                                name="userName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>User Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., Jane Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="userContactInfo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>User Contact Info</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., jane.doe@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="orderHistory"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Order History (JSON)</FormLabel>
                                    <FormControl>
                                        <Textarea className="font-code" rows={8} {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Provide the user's order history as a JSON string.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="typicalUsage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Typical Usage (JSON)</FormLabel>
                                    <FormControl>
                                        <Textarea className="font-code" rows={6} {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Provide the typical usage for each medicine.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={loading}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {loading ? "Generating..." : "Generate Reminder"}
                        </Button>
                    </form>
                </Form>

                {error && (
                    <Alert variant="destructive" className="mt-8">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                {result && (
                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle className="font-headline">Generated Reminder</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Delivery Channel:</h4>
                                <p className="text-sm bg-muted p-2 rounded-md">{result.deliveryChannel}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Reminder Message:</h4>
                                <div className="text-sm bg-muted p-4 rounded-md whitespace-pre-wrap">
                                    {result.reminderMessage}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </CardContent>
        </Card>
    )
}
