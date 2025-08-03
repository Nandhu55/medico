
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
    { name: 'Tamoxifen (For Cancer)', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhASEBAQEA8VEA8PDw8QEA8QFRAPFRUWFhURExUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFyslHR0uKy0tLSsrLS0rLS03LS0tKy0tLS0tLS0tLSstLS0uNystKy0tMC0tLS0tLS0wLSsrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EAEgQAAEEAAMEBwMHCAcJAAAAAAEAAgMRBBIhBTFBUQYTImFxkbEygaEUI1JywdHwFUJDU4Ky4fEkRFRidJOiBxYlM2NzksLS/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwUEBv/EAC4RAQABAgQEBAUFAQAAAAAAAAABAhEDEiExBBNBUQUiYaEUI7HR8DJxgcHhkf/aAAwDAQACEQMRAD8A+iJgkCYFdXI4KZIE4UDIhKmCIYIhBQISZRBRENaKVQFEMilKloGKCW0bQFBS0LQS0CoUCiBaQpiUpVCFKUzkpVgKlITlBAtIEJiEFVIQlIVhSlAhSkJyECFQiUhPSBQJSiZRFagnCrCsasLcwKZKEwUDBEIBEIGRQCKIKiCiIKiCiAqWgpaIYIWgpaAgqIKIIgVCUpQRKUSgVUKUqYoIAoUUCFVApaToUikKUhWEJSqFKUhOUpCBCECE5CBCoSlE1KILgnCVO1YUUwQCYKAhFAIhAQioogiKBQRBUQBUKCAo2lURDIpFLRDKWltBASgSoUCgloFS0ERCgoVFVFBFRFBApkCqpSlKdCkCFCk9IKhCEKT0gQgrpRPSiCwBOEoTALIYIgKAJlFQIgKAKUgNKLRhsLnBOaqNVV8FY/Zl/pHD6tBZvDcUTMXYygtrtmn9Y74eqQ7MP6w8UvHc5c9mWkFpOzXcHgfFLJs2U7pQ3waD6q3jv9UnDnt9Puz2otUeAkA1eHHmaHwATfIn/wB3z/gszVC8qWO1Fs+Ru5DzCX5G76I8wmeDlSyqLScI/wCj+6lOFf8AR9EzwnKlQgVf8ld9AqfJnfQPxVzQnJlmUWh2Hd9B3dod6XqT9B3l8UzQcqVNKUreqP0HDfvrTu3oCM/Rd5t+9XNBy5KApSfKfonzb96munZPHi3Tx19EzQuSVZCijnEC8p3XW8+Gl6pqTNBkklIUrXNAHGzu00A43yVZWom7M0zG5UpCcpVpCoFMggCiiKBgU4KqBVjVkWBFKmUUyAKCiDobNOjvEeirxHSDBxyOikxmFjmbWeJ+IhY9oIBGZpNiwQfeEdmn2v2ftWHpLGC/Z9gH/iMV2Af0E/8ABcp3fRT+l2sPiGSND43tkYfZexwc12taEaFOSvKbY246GQ9Q8yRx4vB4aaFuFIijE74mOb1+nzg60P0sCwCNbVO0tvYtg2jNH8nMWDxIiMLo358RGIoJHASB1RmpjRyu13qNXextAleYxO358K7FjFiGURYT5bEcMx8Rd23MMDg97rOYMp9i8x0FK8bRxccsMWIGFLsQ2ZsLohKBDiWRmTqZMxJkYWtf2xl9n2dVLF3oFLXlIukbp4cT8wWsgwuIGOuR7DHjGtcHYSNzdTQa4mQcHRkXm052IfnxcDp4MO7B4bZsWMHXTySHDtOpxAa5hDpW9UWgk3QJzAkhFe8tS15vZfScySQskjhjE7XOw/V4pk7w5rOsMc7A0BjsoceyXC2kXutNmdLDK3BSOwkkWHxeRkMpkjeWyvjc9rXsGoacrgHeFgWg9PalpbUtA9ogqsFG0FeMxscTc0r2sbYbmdoLPD4FYx0iwn9ph/8AIBcb/aK7+jR/4hn7ki8VslmGJecU+VrQBkEQBL3XqLo0vT4bgqMTB5lUz/DxOM8SxMHiOVTFP7y+pN27hT/WcP75Yx6lONtYY/1nD/50f3rwW0ejDeswjcPI4x4gEsMg7TGhoeXHdfZN1Q3UjtPo3E2KZ+HmfI6BxZOx4A3Vmy0Bus89xV+E4ebeedfT1tr210SeP4uM3y48vrvpfTvpq+gN2jAd00J8JI/vVjcZCf0kR8Hs+9fJv93cVr/R5DTQ7cDobqtdTodBqs2I2XNGxskkL2Md7LnNoHkO73rpHh2FM6Yv0+7jPi+PTF6sGff7PszZYzuLD4EFHs93mvjTdlzlrXDDzOa72HCJ5DtL0oarK9pBIcCHAlpaRRBG8EcCrHhdM7Ynt/rM+OV0xrhe/wDj65tTeK3UT8Vz00Lagw3+Gi/dCqtebEWmYe1VVmiJ7wYpSVMyW1tgUCVLS2iColtRUudpVoVLVc0LMqcJkAE1KKCCKlKDXs06u8G/anxzYnFnW74nsxLT2wGOAc1rnEabi7Q/Yq9nb3eAT4rZzJC4uu3DKSKvLlc0N3brcXeK5Vbvpo/TDJiujcEheXGYNfPFinRNlc2M4iMsc2XLz+bbY3HfV6oSbHw8seOibISMRMX4kxyMLmS5I4yBoQzSFuhB4rThtlMY7OCc2tkUwuJEdkkb9Yyf2jyVT9mSZWNE+Xq4+rjc2NwLaADXDt1m07RrUaAN1Jin2jsWKd0rpg5zZcK/ByR3TTE5xcSKFh2u+1kj2E7OyR+Mmmliikiwz5GQfMvkblM7msaOsly6WdKJ01KsGyHggiYjtNvKXttgdK4NNlxIHWDTjl3hE7JJicx5je90jZSZLlGdsbQ09sa9pjT4EorI3oqxjJWQSOjbLg34ScOb1hlkIcG4pxJFy29+Y/nZtdwV7uj7HOk6xxfFJs6PZr48uUmNpkzPzXxElVWlbykdsuck5pG05ro3gyyvuNxmGTVoJ0kY69NWUAAVZFh8UC0vlLnfNhwaWtYLeOsoEbqbYOptx0A0EA2TsyeLKJXYSVrGFjJWYYxTO0Aa57sxaDV3Q1vhuWfDdH3sw2zIOsYThJMK57qcBIIY3MOUcCS4b16C0LRTWpaW1LUU6lpLRtUeW/2ju/o8Q5zg+TH/AHry/RiHCF5fi5Q0NLSyJwdUh5uIG4cuPwPtOl+yZMTHGyLJbZM5zuLdMpGmh5ryLuheL+jGfCRv2r2+ExcP4fJVXlnXrq/NeIYGN8XzacPNEW6XjZ1sZtaNmMw+IOLZPHckZjjZlEEZbQNWSd9k8cp7gJtHG4eDD40R4iOd+Jke5jY3Bxa1+/NW6rd8FxX9D8aP0TT4Sxfeqz0Uxv8AZz7pIT/7LpGHw/l+ZGlusa2m8OE4nFeb5M636VTa8Wl7T8sRnFwBuJj6kYZ+epmZM9igdazaeK5uJ2g1+BxBlkEn9MJylwcTEJ2EADlV0vMHo1jP7NJ7sp9Cq37AxQ34af3Rud6KU8Ngxa1caW7dJmf7ar4ziZzZsKdb9J6xEe1n0uCYyYmOSPERuwxgcGxNeLc/MDmy9wrw3cV8y2trPiD/ANaY/wCty9GzbGNYDk2cIpC3K6ZmEmDqH44krzowU2uaKa9SSY5N/vCvCYfKmZmY2iI2/pnj8TnxTTETvMzpPptd9Im0jw4Av5iME3VAN39+teayWtOOb2cNpqI4xuvKctfs8vfSzUvHidZfoao0gLQtMGoZVtzkqBT5UMqrJEFZlUQMJG80wnbzXCbIUwkPJLGZ3flLeaPylvNcPMeXxUzH+ZUyrml2zim80hxTea43WHkoXHkpZYmXqNkyhznV9Eeqp2jj8RHJKWw9bA2GAtADwTM+R7X9prXEhrQ00Gmr77HDwczmklpLTpqCV1YdsyD2srv9J8x9yk4NU6w+mifK0flpwYx78NK3PO6FrLtwa0kB7hWhJBpvHTXVUx9Iw58UYiex7xC8h9dlkj2M1o7+20jePa4ghbIdtRn2szD4Zh5jX4LZFiWu9l4d3A35hcppmN4bcV3S3DDNZfTTM15HVnI+Jhe5hAdeagdN+h3Lr4bECRjHtDg1zQ4BwLSAeBHNWOPPv+O9IKAAFADQACgByWVPaFpMymZRTZlLSWpaintS0gKNoHtS0qiBwUbSBQuoEmgBqSdAB3qiwFS0oKZAbRtKoiGBTgpAig4nSRwDonHgDxdx5AacN53C+enJGLZ3+a6HS7czdu0sdx3cjv8AjzXlQCulLjiO6MUzv80wxDO/zXEa0/gq1oK6xD55dnr2d/mj17O/zXJDVMpVszd1evZzPmouVRUVslxypqWMSO0Ngjea4KwPd3njoN48VVamhQNWcSE8x8UzZD3Xx4KK0JSO9VGTS6vwSlx9yjUNMf4+Kcnhx5caVOFJ1vu19xVG08B1uXtBoAlF5ST243x6a1ufy4d670T5XejZstTNyPCt27uXMk2b2W11fWNOIc12QtDOs6wtawg5mhpeKo3TdKVDNnSg6yNNyQSPJc45jGYd4y76i9q9d1a2rMz2aehi2hI3c9xHJ3a9Vqj22R7TAe9pI+BXk24fFBouYOkyAGsgaXhzSTRYazDML4cjouk9yxkpq3hbvRx7XiO8lh/vA+osLXHM13sua76pB9F4t0iXPy0WJ4aJ2lcz3GZTMvHxbSmbukd4Op371rZFt549pjXeBLT9q5Tw1cbLmh6QOTArixbejPtNe33Bw+GvwW2HaUTt0jf2jl/epc5wq43hbw3gogqthvcQR3apwuaubt7rMjTE9zXDM6muDc1DcTwb9440vOYLFTmYBzJMTNdQRyzFsUWU9ud7aqweNCiQ0DMHV7CeK9asj2ReUZt2Ynhod/CzWq5U8MsJb1DXOL2jrXtjae11kTWAA+yxrDLTQdLsne5csSnW93ocLjUxRkmIvPfT3jW312/bt4drgBncHO/OIGUX/dHAeJJVq4b8fMGudldccr2yMMTu1G0EZs1a3QILQdHXVWA821HMkDS5piLHvdL1bg1hDS4MHatxyte7wA5i954fNyK5n/v5+fw7SK4Em3JGslcYSHxscTGdfnSMzWksLsoDSyyeLxu1V/5YJkcyNjXgSdU0lxYXP0NjTVtCU2OEfEmkz0p8NidveLdPu7KZc3AbQfI7L1QbQcXu6wkAZ3NYW9ntB4aXDdpXMXvllDBbjQ9TyC3Trs5V0TRNqnA6X7m/VF9ojgeH53h7+C8o169N0rkEjY3xkOblvMADpqNCd2pG7nW4leWazvXWl89bSxysa9Z2tVrWnkusOMrw5NmVITKsWW2oq1FUswCR3HnxBHxKYTG6ANeA3rYYLrnwIP8ANOIPEfjipdcssQlddEafSqj79PRQZ+ZAvw9VuyX3+7f3UiGndRb5C1LrlYS4jcSfHn4neg17q1J5a6D+K6OQjcPfolMRPAj3b0ailx8diJGtpj3AGrLbF8eC48mMxA3SyebftXpsXhyeCwSYNbp23dIhw/yliv10nvaz/wCUp21ix+kJHeyM+gXYfgu6/AJHYPuVmfVbS5L9v4sX2mHQn/lNPoV9J2bsgFjTK8yuIFkARNvuaNR7yV4h2EA4eith2rjI9GSurgHU71tca6qukt06Pev2NBxZXeHv+9ec6S4GWIMODhfiCXEPYfzRVhwI8qpbthbWdJG3rnsMwvOLAO81p4UuwJVxjFrpnd0tEw+Y4nbuIiNTYJ0f13SR34ZmartbIbi5wHDCCONwDmySztaHNOoIAaXfBevxsfWxyRmgHtcwkjNVirpc44r5HHGJG5oxljDoyL0GlsNVu4Erp8RX0ZyW6qxsOat8V8s7/XIuZtV0mGBfNhperBAMsZikaCTQBp2Ya8xxC9Zg8eJGNe0OAcMzQ6ga56KvamCbiI3RvJDSWmxqRlcHD4hWOJridVmi8aPDRdKYBu65h/7ZHotkXTSMbsRKPrRyn1BWvEdDWgEtcHUCaIymu5c07Aby8uJXXn5uznlqh04unUf6+I/Xje30AW2HpzAd74D4TBvqvN/kFhO74Hf5IDo6072juFLE1UTvTC2reyh6XYc/ns/ZmiP2rZF0hhO4k+BYfRy+fno636A99JT0Yb+r9Br4clPldvc876SNrxHg8/sg/akftGE181mIqrYzTwvcvnP+7QG7MPqu+0IjYco9mSZvIdY8fatRThT0XNXHR9BftQ65GNYXG3O3kmgLPfQA1vcsr5XONuJJ5leGfh8UzdNP/mOPraeHEYsEfPv77DHefZXTyUxpDOaZ3es2u9roy4/mzYmJgsjt9aW6AdwPutcVrVmhhkrtuc75yZ4BrR0jy95HiTxW6Md3DuXzUpVIAHu8k7Qf5Jm+9Pm5LpDjJNeCllNf41UzLTJcxUTZlERtDPcnaB/FJZ33SjHnu9Vl1XBqDmIdZ3/BQSDuUUSPxSnV80esHcl6zjvUWCTYYH+SpMAC0ElJokVOkM3yYfjcp1AsWNFornaoxUuRpIBJUmpXQiwsY3Mb4kAlWOjZxa2vqtXk5NvSt3fEAqk9IZz/AAaFwmJ7tZ4dbbuDhAzsZlka5pBG4gHdSrw/SqMaPjkB5tyuHqFkw+JfLYkJN9wQOywd4Hqli/Z1R0qgO4SHxa0faqsTiG4oVVAEOo6njSwR7KbyXQw2Fy7uSGvVbgdoRxNDC7QaCrNALpx7Zg/WDyK4b9nhxKZuzGhSy3l3fyhG+w118OSqdEPuKw4XDhvD4reJPwFuITN3VdQOScQhWhtoNeNyWlvNANiATCNWNTAKWMyrq1OpCupRXUzQpdhgRuWR+AAO70XRzKt8nd5LpTVLFVmB2GHKuff7lQYVrkkrSlnzLUONUwQxIdXzTOcgStOclLEMqb3pXKsk6tRTMoiNDDW8hP1o5lZI4jzVojPNZdF+bv0RzBUgFQxqC8UU4cB4LMWeKGUorX1o7khkB3BVsYmbHWqy3EkkfwWbEbt3mtcjCTyVRhHElLLdzXYQFAYGuC6DoyNxTdWTV/BYst2GKCjurxWyGMp2ju804YeXkli6BoKtjaANAkbZ4UrQwpYugi48E+UIBpUEW7f3pZbnzjlaLX7+HuQ6njqpkIWoZkrpL018kRv5+iOVMLC0l0znhp3aIhxo3oUhJ5IizwVS6xjzpZTmQDv5rMAVOrPeFLF5aHvGm/3JSfJZhAd5JRy9+qWXME1fjmqCrZI/xao6orUMVShCBUyFIWFVkHJSFZlS5VSxKUTZUERY1MCgostmDigSgoge/NTPaiigcHkntBRRuBsIZVFFJUAO5MUFFBHHkrIwVFEDNCcFRRA6Wu9RRRTBClFEQKRBUUW4ZkHOUa5RRaZEyhQPUUQRr0pCCiBJCqiookEkISkqKKoUBQhBRBFFFEH/2Q==' },
    { name: 'Ketosteril (For Kidney)', image: 'data:image/jpeg;base64,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' }
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
