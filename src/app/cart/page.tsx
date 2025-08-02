
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "Metformin 500mg",
    price: 15.99,
    quantity: 2,
    image: "https://placehold.co/100x100.png",
    description: "30 Tablets"
  },
  {
    id: 2,
    name: "Lisinopril 10mg",
    price: 12.50,
    quantity: 1,
    image: "https://placehold.co/100x100.png",
    description: "30 Tablets"
  },
  {
    id: 3,
    name: "Amlodipine 5mg",
    price: 25.00,
    quantity: 1,
    image: "https://placehold.co/100x100.png",
    description: "30 Capsules"
  }
];

export default function CartPage() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8">Your Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-6 p-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                      data-ai-hint="medicine pill"
                    />
                    <div className="flex-1 grid gap-2">
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                      <p className="text-muted-foreground">{item.description}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border rounded-md">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-medium">{item.quantity}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">₹{(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">₹{item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <Button size="lg" className="w-full mt-4" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
             <CardHeader>
                <CardTitle className="font-headline text-lg">Apply Coupon</CardTitle>
             </CardHeader>
             <CardContent>
                <form className="flex gap-2">
                    <Input placeholder="Coupon Code"/>
                    <Button variant="outline">Apply</Button>
                </form>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
