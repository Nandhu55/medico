
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, HeartPulse, Truck, FlaskConical, Stethoscope, Star, Plus } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const categories = [
    { name: 'Tamoxifen (For Cancer)', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhASEBAQEA8VEA8PDw8QEA8QFRAPFRUWFhURExUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFyslHR0uKy0tLSsrLS0rLS03LS0tKy0tLS0tLS0tLSstLS0uNystKy0tMC0tLS0tLS0wLSsrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EAEgQAAEEAAMEBwMHCAcJAAAAAAEAAgMRBBIhBTFBUQYTImFxkbEygaEUI1JywdHwFUJDU4Ky4fEkRFRidJOiBxYlM2NzksLS/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwUEBv/EAC4RAQABAgQEBAUFAQAAAAAAAAABAhEDEiExBBNBUQUiYaEUI7HR8DJxgcHhkf/aAAwDAQACEQMRAD8A+iJgkCYFdXI4KZIE4UDIhKmCIYIhBQISZRBRENaKVQFEMilKloGKCW0bQFBS0LQS0CoUCiBaQpiUpVCFKUzkpVgKlITlBAtIEJiEFVIQlIVhSlAhSkJyECFQiUhPSBQJSiZRFagnCrCsasLcwKZKEwUDBEIBEIGRQCKIKiCiIKiCiAqWgpaIYIWgpaAgqIKIIgVCUpQRKUSgVUKUqYoIAoUUCFVApaToUikKUhWEJSqFKUhOUpCBCECE5CBCoSlE1KILgnCVO1YUUwQCYKAhFAIhAQioogiKBQRBUQBUKCAo2lURDIpFLRDKWltBASgSoUCgloFS0ERCgoVFVFBFRFBApkCqpSlKdCkCFCk9IKhCEKT0gQgrpRPSiCwBOEoTALIYIgKAJlFQIgKAKUgNKLRhsLnBOaqNVV8FY/Zl/pHD6tBZvDcUTMXYygtrtmn9Y74eqQ7MP6w8UvHc5c9mWkFpOzXcHgfFLJs2U7pQ3waD6q3jv9UnDnt9Puz2otUeAkA1eHHmaHwATfIn/wB3z/gszVC8qWO1Fs+Ru5DzCX5G76I8wmeDlSyqLScI/wCj+6lOFf8AR9EzwnKlQgVf8ld9AqfJnfQPxVzQnJlmUWh2Hd9B3dod6XqT9B3l8UzQcqVNKUreqP0HDfvrTu3oCM/Rd5t+9XNBy5KApSfKfonzb96munZPHi3Tx19EzQuSVZCijnEC8p3XW8+Gl6pqTNBkklIUrXNAHGzu00A43yVZWom7M0zG5UpCcpVpCoFMggCiiKBgU4KqBVjVkWBFKmUUyAKCiDobNOjvEeirxHSDBxyOikxmFjmbWeJ+IhY9oIBGZpNiwQfeEdmn2v2ftWHpLGC/Z9gH/iMV2Af0E/8ABcp3fRT+l2sPiGSND43tkYfZexwc12taEaFOSvKbY246GQ9Q8yRx4vB4aaFuFIijE74mOb1+nzg60P0sCwCNbVO0tvYtg2jNH8nMWDxIiMLo358RGIoJHASB1RmpjRyu13qNXextAleYxO358K7FjFiGURYT5bEcMx8Rd23MMDg97rOYMp9i8x0FK8bRxccsMWIGFLsQ2ZsLohKBDiWRmTqZMxJkYWtf2xl9n2dVLF3oFLXlIukbp4cT8wWsgwuIGOuR7DHjGtcHYSNzdTQa4mQcHRkXm052IfnxcDp4MO7B4bZsWMHXTySHDtOpxAa5hDpW9UWgk3QJzAkhFe8tS15vZfScySQskjhjE7XOw/V4pk7w5rOsMc7A0BjsoceyXC2kXutNmdLDK3BSOwkkWHxeRkMpkjeWyvjc9rXsGoacrgHeFgWg9PalpbUtA9ogqsFG0FeMxscTc0r2sbYbmdoLPD4FYx0iwn9ph/8AIBcb/aK7+jR/4hn7ki8VslmGJecU+VrQBkEQBL3XqLo0vT4bgqMTB5lUz/DxOM8SxMHiOVTFP7y+pN27hT/WcP75Yx6lONtYY/1nD/50f3rwW0ejDeswjcPI4x4gEsMg7TGhoeXHdfZN1Q3UjtPo3E2KZ+HmfI6BxZOx4A3Vmy0Bus89xV+E4ebeedfT1tr210SeP4uM3y48vrvpfTvpq+gN2jAd00J8JI/vVjcZCf0kR8Hs+9fJv93cVr/R5DTQ7cDobqtdTodBqs2I2XNGxskkL2Md7LnNoHkO73rpHh2FM6Yv0+7jPi+PTF6sGff7PszZYzuLD4EFHs93mvjTdlzlrXDDzOa72HCJ5DtL0oarK9pBIcCHAlpaRRBG8EcCrHhdM7Ynt/rM+OV0xrhe/wDj65tTeK3UT8Vz00Lagw3+Gi/dCqtebEWmYe1VVmiJ7wYpSVMyW1tgUCVLS2iColtRUudpVoVLVc0LMqcJkAE1KKCCKlKDXs06u8G/anxzYnFnW74nsxLT2wGOAc1rnEabi7Q/Yq9nb3eAT4rZzJC4uu3DKSKvLlc0N3brcXeK5Vbvpo/TDJiujcEheXGYNfPFinRNlc2M4iMsc2XLz+bbY3HfV6oSbHw8seOibISMRMX4kxyMLmS5I4yBoQzSFuhB4rThtlMY7OCc2tkUwuJEdkkb9Yyf2jyVT9mSZWNE+Xq4+rjc2NwLaADXDt1m07RrUaAN1Jin2jsWKd0rpg5zZcK/ByR3TTE5xcSKFh2u+1kj2E7OyR+Mmmliikiwz5GQfMvkblM7msaOsly6WdKJ01KsGyHggiYjtNvKXttgdK4NNlxIHWDTjl3hE7JJicx5je90jZSZLlGdsbQ09sa9pjT4EorI3oqxjJWQSOjbLg34ScOb1hlkIcG4pxJFy29+Y/nZtdwV7uj7HOk6xxfFJs6PZr48uUmNpkzPzXxElVWlbykdsuck5pG05ro3gyyvuNxmGTVoJ0kY69NWUAAVZFh8UC0vlLnfNhwaWtYLeOsoEbqbYOptx0A0EA2TsyeLKJXYSVrGFjJWYYxTO0Aa57sxaDV3Q1vhuWfDdH3sw2zIOsYThJMK57qcBIIY3MOUcCS4b16C0LRTWpaW1LUU6lpLRtUeW/2ju/o8Q5zg+TH/AHry/RiHCF5fi5Q0NLSyJwdUh5uIG4cuPwPtOl+yZMTHGyLJbZM5zuLdMpGmh5ryLuheL+jGfCRv2r2+ExcP4fJVXlnXrq/NeIYGN8XzacPNEW6XjZ1sZtaNmMw+IOLZPHckZjjZlEEZbQNWSd9k8cp7gJtHG4eDD40R4iOd+Jke5jY3Bxa1+/NW6rd8FxX9D8aP0TT4Sxfeqz0Uxv8AZz7pIT/7LpGHw/l+ZGlusa2m8OE4nFeb5M636VTa8Wl7T8sRnFwBuJj6kYZ+epmZM9igdazaeK5uJ2g1+BxBlkEn9MJylwcTEJ2EADlV0vMHo1jP7NJ7sp9Cq37AxQ34af3Rud6KU8Ngxa1caW7dJmf7ar4ziZzZsKdb9J6xEe1n0uCYyYmOSPERuwxgcGxNeLc/MDmy9wrw3cV8y2trPiD/ANaY/wCty9GzbGNYDk2cIpC3K6ZmEmDqH44krzowU2uaKa9SSY5N/vCvCYfKmZmY2iI2/pnj8TnxTTETvMzpPptd9Im0jw4Av5iME3VAN39+teayWtOOb2cNpqI4xuvKctfs8vfSzUvHidZfoao0gLQtMGoZVtzkqBT5UMqrJEFZlUQMJG80wnbzXCbIUwkPJLGZ3flLeaPylvNcPMeXxUzH+ZUyrml2zim80hxTea43WHkoXHkpZYmXqNkyhznV9Eeqp2jj8RHJKWw9bA2GAtADwTM+R7X9prXEhrQ00Gmr77HDwczmklpLTpqCV1YdsyD2srv9J8x9yk4NU6w+mifK0flpwYx78NK3PO6FrLtwa0kB7hWhJBpvHTXVUx9Iw58UYiex7xC8h9dlkj2M1o7+20jePa4ghbIdtRn2szD4Zh5jX4LZFiWu9l4d3A35hcppmN4bcV3S3DDNZfTTM15HVnI+Jhe5hAdeagdN+h3Lr4bECRjHtDg1zQ4BwLSAeBHNWOPPv+O9IKAAFADQACgByWVPaFpMymZRTZlLSWpaintS0gKNoHtS0qiBwUbSBQuoEmgBqSdAB3qiwFS0oKZAbRtKoiGBTgpAig4nSRwDonHgDxdx5AacN53C+enJGLZ3+a6HS7czdu0sdx3cjv8AjzXlQCulLjiO6MUzv80wxDO/zXEa0/gq1oK6xD55dnr2d/mj17O/zXJDVMpVszd1evZzPmouVRUVslxypqWMSO0Ngjea4KwPd3njoN48VVamhQNWcSE8x8UzZD3Xx4KK0JSO9VGTS6vwSlx9yjUNMf4+Kcnhx5caVOFJ1vu19xVG08B1uXtBoAlF5ST243x6a1ufy4d670T5XejZstTNyPCt27uXMk2b2W11fWNOIc12QtDOs6wtawg5mhpeKo3TdKVDNnSg6yNNyQSPJc45jGYd4y76i9q9d1a2rMz2aehi2hI3c9xHJ3a9Vqj22R7TAe9pI+BXk24fFBouYOkyAGsgaXhzSTRYazDML4cjouk9yxkpq3hbvRx7XiO8lh/vA+osLXHM13sua76pB9F4t0iXPy0WJ4aJ2lcz3GZTMvHxbSmbukd4Op371rZFt549pjXeBLT9q5Tw1cbLmh6QOTArixbejPtNe33Bw+GvwW2HaUTt0jf2jl/epc5wq43hbw3gogqthvcQR3apwuaubt7rMjTE9zXDM6muDc1DcTwb9440vOYLFTmYBzJMTNdQRyzFsUWU9ud7aqweNCiQ0DMHV7CeK9asj2ReUZt2Ynhod/CzWq5U8MsJb1DXOL2jrXtjae11kTWAA+yxrDLTQdLsne5csSnW93ocLjUxRkmIvPfT3jW312/bt4drgBncHO/OIGUX/dHAeJJVq4b8fMGudldccr2yMMTu1G0EZs1a3QILQdHXVWA821HMkDS5piLHvdL1bg1hDS4MHatxyte7wA5i954fNyK5n/v5+fw7SK4Em3JGslcYSHxscTGdfnSMzWksLsoDSyyeLxu1V/5YJkcyNjXgSdU0lxYXP0NjTVtCU2OEfEmkz0p8NidveLdPu7KZc3AbQfI7L1QbQcXu6wkAZ3NYW9ntB4aXDdpXMXvllDBbjQ9TyC3Trs5V0TRNqnA6X7m/VF9ojgeH53h7+C8o169N0rkEjY3xkOblvMADpqNCd2pG7nW4leWazvXWl89bSxysa9Z2tVrWnkusOMrw5NmVITKsWW2oq1FUswCR3HnxBHxKYTG6ANeA3rYYLrnwIP8ANOIPEfjipdcssQlddEafSqj79PRQZ+ZAvw9VuyX3+7f3UiGndRb5C1LrlYS4jcSfHn4neg17q1J5a6D+K6OQjcPfolMRPAj3b0ailx8diJGtpj3AGrLbF8eC48mMxA3SyebftXpsXhyeCwSYNbp23dIhw/yliv10nvaz/wCUp21ix+kJHeyM+gXYfgu6/AJHYPuVmfVbS5L9v4sX2mHQn/lNPoV9J2bsgFjTK8yuIFkARNvuaNR7yV4h2EA4eith2rjI9GSurgHU71tca6qukt06Pev2NBxZXeHv+9ec6S4GWIMODhfiCXEPYfzRVhwI8qpbthbWdJG3rnsMwvOLAO81p4UuwJVxjFrpnd0tEw+Y4nbuIiNTYJ0f13SR34ZmartbIbi5wHDCCONwDmySztaHNOoIAaXfBevxsfWxyRmgHtcwkjNVirpc44r5HHGJG5oxljDoyL0GlsNVu4Erp8RX0ZyW6qxsOat8V8s7/XIuZtV0mGBfNhperBAMsZikaCTQBp2Ya8xxC9Zg8eJGNe0OAcMzQ6ga56KvamCbiI3RvJDSWmxqRlcHD4hWOJridVmi8aPDRdKYBu65h/7ZHotkXTSMbsRKPrRyn1BWvEdDWgEtcHUCaIymu5c07Aby8uJXXn5uznlqh04unUf6+I/Xje30AW2HpzAd74D4TBvqvN/kFhO74Hf5IDo6072juFLE1UTvTC2reyh6XYc/ns/ZmiP2rZF0hhO4k+BYfRy+fno636A99JT0Yb+r9Br4clPldvc876SNrxHg8/sg/akftGE181mIqrYzTwvcvnP+7QG7MPqu+0IjYco9mSZvIdY8fatRThT0XNXHR9BftQ65GNYXG3O3kmgLPfQA1vcsr5XONuJJ5leGfh8UzdNP/mOPraeHEYsEfPv77DHefZXTyUxpDOaZ3es2u9roy4/mzYmJgsjt9aW6AdwPutcVrVmhhkrtuc75yZ4BrR0jy95HiTxW6Md3DuXzUpVIAHu8k7Qf5Jm+9Pm5LpDjJNeCllNf41UzLTJcxUTZlERtDPcnaB/FJZ33SjHnu9Vl1XBqDmIdZ3/BQSDuUUSPxSnV80esHcl6zjvUWCTYYH+SpMAC0ElJokVOkM3yYfjcp1AsWNFornaoxUuRpIBJUmpXQiwsY3Mb4kAlWOjZxa2vqtXk5NvSt3fEAqk9IZz/AAaFwmJ7tZ4dbbuDhAzsZlka5pBG4gHdSrw/SqMaPjkB5tyuHqFkw+JfLYkJN9wQOywd4Hqli/Z1R0qgO4SHxa0faqsTiG4oVVAEOo6njSwR7KbyXQw2Fy7uSGvVbgdoRxNDC7QaCrNALpx7Zg/WDyK4b9nhxKZuzGhSy3l3fyhG+w118OSqdEPuKw4XDhvD4reJPwFuITN3VdQOScQhWhtoNeNyWlvNANiATCNWNTAKWMyrq1OpCupRXUzQpdhgRuWR+AAO70XRzKt8nd5LpTVLFVmB2GHKuff7lQYVrkkrSlnzLUONUwQxIdXzTOcgStOclLEMqb3pXKsk6tRTMoiNDDW8hP1o5lZI4jzVojPNZdF+bv0RzBUgFQxqC8UU4cB4LMWeKGUorX1o7khkB3BVsYmbHWqy3EkkfwWbEbt3mtcjCTyVRhHElLLdzXYQFAYGuC6DoyNxTdWTV/BYst2GKCjurxWyGMp2ju804YeXkli6BoKtjaANAkbZ4UrQwpYugi48E+UIBpUEW7f3pZbnzjlaLX7+HuQ6njqpkIWoZkrpL018kRv5+iOVMLC0l0znhp3aIhxo3oUhJ5IizwVS6xjzpZTmQDv5rMAVOrPeFLF5aHvGm/3JSfJZhAd5JRy9+qWXME1fjmqCrZI/xao6orUMVShCBUyFIWFVkHJSFZlS5VSxKUTZUERY1MCgostmDigSgoge/NTPaiigcHkntBRRuBsIZVFFJUAO5MUFFBHHkrIwVFEDNCcFRRA6Wu9RRRTBClFEQKRBUUW4ZkHOUa5RRaZEyhQPUUQRr0pCCiBJCqiookEkISkqKKoUBQhBRBFFFEH/2Q==' }
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[550px] bg-background">
        <Image
            src="data:image/jpeg;base64,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"
            fill
            alt="Hero Background"
            className="z-0 object-cover"
            data-ai-hint="pharmacy interior"
        />
        <div className="relative z-10 container h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 bg-black/50">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-white">
              Your Health, Our Priority.
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
          <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
          <div className="mx-auto w-full max-w-2xl space-y-2">
             <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">Learn More</AccordionTrigger>
                <AccordionContent className="text-left text-base text-muted-foreground space-y-4 pt-4">
                  <p>
                    Our Rural Access Program is at the heart of our mission. We believe that geographical location should not be a barrier to quality healthcare. Through this initiative, we partner with local health workers and community centers to identify families and individuals in remote areas who lack access to essential medications.
                  </p>
                  <p>
                    Once identified, we provide a one-month supply of necessary medicines completely free of charge. This includes everything from chronic disease medications to essential vitamins and supplements. Our goal is to bridge the gap in healthcare access and create healthier communities, one village at a time.
                  </p>
                  <p>
                    <strong>Key impacts:</strong> We've reached over 10,000 individuals across 50 villages, leading to better management of chronic conditions and improved overall health outcomes in these communities.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
