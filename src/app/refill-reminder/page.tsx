import { RefillForm } from "./refill-form";
import { Bot } from "lucide-react";

export default function RefillReminderPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-primary text-primary-foreground rounded-full p-3">
          <Bot className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
          Monthly Refill Reminder Tool
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-xl">
          Let our AI assistant help you remember your monthly medicine refills. Provide your order history and typical usage to get a personalized reminder message.
        </p>
      </div>

      <div className="mt-12">
        <RefillForm />
      </div>
    </div>
  );
}
