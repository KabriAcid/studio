
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Handshake, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white bg-gradient-to-r from-primary to-purple-600">
          <div className="absolute inset-0 bg-black/40"></div>
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            layout="fill"
            objectFit="cover"
            alt="Students studying together"
            className="absolute inset-0 z-[-1] opacity-80"
            data-ai-hint="students learning"
          />
          <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight">
              Empowering Futures Through Education
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              We provide financial aid and support to dedicated students, helping them achieve their academic dreams and build a brighter tomorrow.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/dashboard/contributors">Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href="/impact">Our Impact</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features/Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-headline">Why We Exist</h2>
              <p className="text-muted-foreground mt-2 text-lg">
                To bridge the gap between potential and opportunity for every student.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                    <Target className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold font-headline mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To ensure that no student is left behind due to financial constraints. We are committed to providing transparent and effective support.
                </p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                    <BookOpen className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold font-headline mb-2">Our Approach</h3>
                <p className="text-muted-foreground">
                  We identify and support high-achieving students from low-income backgrounds, providing them with funding for fees, materials, and living expenses.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                    <Handshake className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold font-headline mb-2">Our Impact</h3>
                <p className="text-muted-foreground">
                  With the help of our generous contributors, we have empowered hundreds of students to pursue higher education and achieve their dreams.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
