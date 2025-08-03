
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
    { name: 'OTC Drugs', image: 'https://placehold.co/400x300.png' },
    { name: 'Prescription Drugs', image: 'https://placehold.co/400x300.png' },
    { name: 'Vitamins', image: 'https://placehold.co/400x300.png' },
    { name: 'Personal Care', image: 'https://placehold.co/400x300.png' },
    { name: 'Baby Care', image: 'https://placehold.co/400x300.png' },
    { name: 'Health Devices', image: 'https://placehold.co/400x300.png' }
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
              PILL 2 DOOR: Affordable Care, Anywhere.
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
                { name: "Sarah L.", review: "PILL 2 DOOR is a lifesaver! The one-day delivery is incredibly fast, and their prices are the best I've found online." },
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
