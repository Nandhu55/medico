
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Camera, Lightbulb, CheckCircle } from "lucide-react";

export default function UploadPrescriptionPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-primary text-primary-foreground rounded-full p-3">
          <Upload className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
          Upload Your Prescription
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-xl">
          It's simple and quick. Just upload a clear photo of your prescription, and we'll take care of the rest.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Upload Details</CardTitle>
            <CardDescription>
              Please provide your details and upload the prescription file.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" placeholder="Jane Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" required />
              </div>
               <div className="grid gap-2">
                <Label htmlFor="prescription">Upload Prescription Image</Label>
                 <Input id="prescription" type="file" className="h-auto p-2" required />
                 <p className="text-xs text-muted-foreground">Supported formats: JPG, PNG, PDF. Max size: 5MB.</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notes for the Pharmacist (Optional)</Label>
                <Textarea id="notes" placeholder="Any special instructions..."></Textarea>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit Prescription
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
           <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
                <Lightbulb className="text-primary"/>
                Tips for a Clear Photo
            </CardTitle>
            <CardDescription>
                Follow these tips to ensure we can read your prescription clearly.
            </CardDescription>
           </CardHeader>
           <CardContent>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0"/>
                    <span>Place the prescription on a flat surface with good lighting. Avoid shadows.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0"/>
                    <span>Make sure the entire prescription is in the frame, from top to bottom.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0"/>
                    <span>Check that the text is readable and not blurry before uploading.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Camera className="h-5 w-5 text-primary mt-1 shrink-0"/>
                    <span>Include doctor's details and signature, and patient's details.</span>
                </li>
             </ul>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
