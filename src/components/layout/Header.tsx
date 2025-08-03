
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, Upload, Package } from "lucide-react";
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

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
      >
        <path d="M8.5 8.5v7h7" />
        <path d="M8.5 15.5 19 5" />
      </svg>
      <span className="font-bold text-lg">PILL 2 DOOR</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <div className="mr-6">
            <Logo />
          </div>
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
            <div className="mb-6">
             <Logo />
            </div>
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
        
        <div className="flex md:hidden flex-1 justify-center">
             <Logo />
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
