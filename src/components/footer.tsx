
import { Sparkles, Twitter, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary mb-4">
                <Sparkles className="h-8 w-8" />
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
