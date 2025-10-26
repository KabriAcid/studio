
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function PublicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
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
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium transition-colors",
                pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-4 flex flex-col gap-2">
                <Button asChild variant="outline">
                    <Link href="/login">Log In</Link>
                </Button>
                <Button asChild>
                    <Link href="/donate">Donate Now</Link>
                </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
