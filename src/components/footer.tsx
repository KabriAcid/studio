
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="h-8 w-8"
                    fill="currentColor"
                >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM188,62.14a71.74,71.74,0,0,1,22.1,38.54L174.45,114A48.42,48.42,0,0,0,149,79.05ZM128,56A72,72,0,0,1,188.4,76.67l-24.16,14A48.06,48.06,0,0,0,128,80V56Zm0,48a24,24,0,1,1-24,24A24,24,0,0,1,128,104Zm-64-4.83,24.16-14A48.06,48.06,0,0,0,128,80V56A72,72,0,0,0,67.6,76.67Zm-.1,43.69H45.86A71.74,71.74,0,0,1,68,62.14l24.45,14.12A48.42,48.42,0,0,0,81.55,114ZM128,200a72,72,0,0,1-60.4-29.33L91.76,156.8A48.06,48.06,0,0,0,128,176v24Zm34.55-42,24.45,14.12a72.23,72.23,0,0,1-44.1,23.19V176A48.42,48.42,0,0,0,162.55,158Z" />
                </svg>
                <span>ESI</span>
            </Link>
            <p className="text-muted-foreground">Empowering the next generation of leaders through education.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/impact" className="text-muted-foreground hover:text-primary">Our Impact</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link href="/donate" className="text-muted-foreground hover:text-primary">Donate</Link></li>
              <li><Link href="/volunteer" className="text-muted-foreground hover:text-primary">Volunteer</Link></li>
              <li><Link href="/partners" className="text-muted-foreground hover:text-primary">Partner with Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ESI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
