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
    { name: 'OTC Drugs', image: 'data:image/jpeg;base64,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' },
    { name: 'Prescription Drugs', image: 'https://placehold.co/400x300.png' },
    { name: 'Vitamins', image: 'https://placehold.co/400x300.png' },
    { name: 'Personal Care', image: 'https://placehold.co/400x300.png' },
    { name: 'Baby Care', image: 'https://placehold.co/400x300.png' },
    { name: 'Health Devices', image: 'https://placehold.co/400x300.png' }
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-background">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-headline">
                Medicos: Affordable Care, Anywhere.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your trusted partner for fast, reliable, and affordable medicine delivery and healthcare services.
              </p>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    type="search"
                    placeholder="Search for medicines or healthcare products..."
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit" variant="outline" size="icon">
                    <Search className="h-4 w-4" />
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
            <Image
              src="data:image/jpeg;base64,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' },
    { name: 'Prescription Drugs', image: 'https://placehold.co/400x300.png' },
    { name: 'Vitamins', image: 'https://placehold.co/400x300.png' },
    { name: 'Personal Care', image: 'https://placehold.co/400x300.png' },
    { name: 'Baby Care', image: 'https://placehold.co/400x300.png' },
    { name: 'Health Devices', image: 'https://placehold.co/400x300.png' }
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-background">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-headline">
                Medicos: Affordable Care, Anywhere.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your trusted partner for fast, reliable, and affordable medicine delivery and healthcare services.
              </p>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    type="search"
                    placeholder="Search for medicines or healthcare products..."
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit" variant="outline" size="icon">
                    <Search className="h-4 w-4" />
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
            <Image
              src="data:image/jpeg;base64,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"
              width="600"
              height="600"
              alt="Hero"
              data-ai-hint="pharmacy products"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
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
                  <CardHeader>
                    <Image src={category.image} alt={category.name} width={400} height={300} className="rounded-t-lg object-cover" data-ai-hint="medical products"/>
                  </CardHeader>
                  <CardContent>
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
