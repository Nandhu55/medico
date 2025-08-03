
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, Upload, User, Package } from "lucide-react";
import { Pill2DoorLogo } from "../icons/Pill2DoorLogo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#categories", label: "Medicines" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Pill2DoorLogo className="h-10 w-auto" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle Navigation"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
              <Pill2DoorLogo className="h-10 w-auto" />
            </Link>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-primary text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2">
                <Button variant="outline" asChild>
                    <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                    <Link href="/signup">Sign Up</Link>
                </Button>
            </div>
          </SheetContent>
        </Sheet>
        
        {/* Mobile-first logo */}
        <div className="flex md:hidden flex-1 justify-center">
             <Link href="/" className="flex items-center space-x-2">
                <Pill2DoorLogo className="h-10 w-auto" />
            </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="outline" className="hidden sm:flex items-center gap-2" asChild>
            <Link href="/upload-prescription">
              <Upload className="h-4 w-4" />
              Upload Prescription
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Search Products</DialogTitle>
              </DialogHeader>
              <form className="flex items-center gap-2">
                <Input
                  id="search"
                  placeholder="Search for medicines, health products..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" aria-label="Submit Search">
                  <Search className="h-5 w-5" />
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Button variant="ghost" size="icon" aria-label="Order Tracking">
            <Package className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <div className="hidden sm:flex items-center gap-2">
             <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
             </Button>
             <Button asChild>
                <Link href="/signup">Sign Up</Link>
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
