import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <span className="font-bold text-lg text-primary">PILL 2 DOOR</span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container py-12 px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs">
            Affordable Care, Anywhere. Your trusted online pharmacy.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-lg font-headline">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="#services" className="hover:text-primary">Services</Link></li>
            <li><Link href="#categories" className="hover:text-primary">Categories</Link></li>
            <li><Link href="/refill-reminder" className="hover:text-primary">Refill Reminder</Link></li>
            <li><Link href="#" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-lg font-headline">Legal</h4>
          <ul className="space-y-1">
            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary">Shipping Policy</Link></li>
            <li><Link href="#" className="hover:text-primary">Return Policy</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg font-headline">Newsletter</h4>
          <p>Stay up to date with our latest news and offers.</p>
          <form className="flex space-x-2">
            <Input type="email" placeholder="Enter your email" className="bg-background" />
            <Button type="submit" className="bg-primary hover:bg-primary/90">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} PILL 2 DOOR. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Social icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
