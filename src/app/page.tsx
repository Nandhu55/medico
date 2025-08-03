
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, HeartPulse, Truck, FlaskConical, Stethoscope, Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

export default function Home() {
  const categories = [
    { name: 'OTC Drugs', image: 'data:image/jpeg;base64,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" }
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-background">
        <Image
            src="https://placehold.co/1920x1080.png"
            layout="fill"
            objectFit="cover"
            alt="Hero Background"
            className="z-0"
            data-ai-hint="pharmacy interior"
        />
        <div className="relative z-10 container h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 bg-black/50">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-white">
              Medicos: Affordable Care, Anywhere.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Your trusted partner for fast, reliable, and affordable medicine delivery and healthcare services.
            </p>
          </div>
          <div className="w-full max-w-2xl space-y-2">
            <form className="flex space-x-2">
              <Input
                type="search"
                placeholder="Search for medicines or healthcare products..."
                className="max-w-lg flex-1 bg-white/90 text-black placeholder:text-gray-500"
              />
              <Button type="submit" variant="default" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>
          <div className="mt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/refill-reminder">
                  Monthly Refill Reminder Tool
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-4 lg:gap-12 xl:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-4 text-primary-foreground">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">One-Day Delivery</h3>
              <p className="text-muted-foreground">Fast, reliable delivery to your doorstep in selected cities.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-4 text-primary-foreground">
                <HeartPulse className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">Health Checkups</h3>
              <p className="text-muted-foreground">Book diagnostic tests and full-body checkups with ease.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-4 text-primary-foreground">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">Doctor Consultations</h3>
              <p className="text-muted-foreground">Connect with expert doctors via our telemedicine platform.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-4 text-primary-foreground">
                <FlaskConical className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">Lab Tests</h3>
              <p className="text-muted-foreground">Free and subsidized diagnostic tests for everyone.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="categories" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Browse by Category</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find exactly what you need from our wide range of products.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map(category => (
               <Card key={category.name}>
                  <CardHeader className="p-0">
                    <Image src={category.image} alt={category.name} width={400} height={300} className="rounded-t-lg object-cover aspect-[4/3]" data-ai-hint="medical products"/>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold font-headline">{category.name}</h3>
                  </CardContent>
               </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rural-access" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Rural Access Program</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're committed to making healthcare accessible to everyone. Our rural access program provides one month of free medicine to underserved communities.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button type="button" size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting your medicines is as easy as 1, 2, 3.
            </p>
          </div>
          <div className="relative grid gap-10 sm:grid-cols-3">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-full bg-border -z-10 hidden sm:block"></div>
             <div className="flex flex-col items-center text-center space-y-4 relative bg-secondary px-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground border-4 border-secondary text-2xl font-bold">1</div>
                <h3 className="font-bold text-xl font-headline">Upload Prescription</h3>
                <p className="text-muted-foreground">Simply upload a valid prescription from your doctor.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 relative bg-secondary px-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground border-4 border-secondary text-2xl font-bold">2</div>
                <h3 className="font-bold text-xl font-headline">Add to Cart</h3>
                <p className="text-muted-foreground">Our pharmacists will verify it and add medicines to your cart.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 relative bg-secondary px-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground border-4 border-secondary text-2xl font-bold">3</div>
                <h3 className="font-bold text-xl font-headline">Fast Delivery</h3>
                <p className="text-muted-foreground">Complete payment and get your medicines delivered quickly.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">What Our Customers Say</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                { name: "Sarah L.", review: "Medicos is a lifesaver! The one-day delivery is incredibly fast, and their prices are the best I've found online." },
                { name: "John D.", review: "Uploading my prescription was so easy, and the customer support team was very helpful. Highly recommended!" },
                { name: "Anita P.", review: "The monthly refill reminder is a fantastic feature. I never have to worry about running out of my essential medications." }
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                        <p className="text-lg italic">"{testimonial.review}"</p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                        </div>
                        <cite className="font-bold not-italic">- {testimonial.name}</cite>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Create an account or upload your prescription to experience the future of healthcare.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button type="button" size="lg">Order Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
