
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, TrendingUp, HeartHandshake, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const impactStats = [
    { title: "Students Supported", value: "152", icon: <Users /> },
    { title: "Funds Disbursed", value: "₦14M+", icon: <TrendingUp /> },
    { title: "Active Contributors", value: "23", icon: <HeartHandshake /> },
    { title: "Graduation Rate", value: "95%", icon: <Target /> },
];

const testimonials = [
    {
        id: 1,
        name: "Aisha Mohammed",
        story: "EduAid HQ gave me the chance to focus on my studies without financial worry. Today, I'm a graduate of Computer Science, and I am forever grateful for their support.",
        avatar: "https://images.unsplash.com/photo-1599566147214-ce487862ea4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
        program: "University Scholar, Class of 2023"
    },
    {
        id: 2,
        name: "Ibrahim Umar",
        story: "Coming from a low-income family, university seemed impossible. Thanks to the generosity of EduAid HQ's donors, I'm now in my final year of Engineering and inspiring others in my community.",
        avatar: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
        program: "Engineering Student"
    }
];

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
         {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white bg-primary">
             <div className="absolute inset-0 bg-black/50"></div>
             <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                fill
                style={{objectFit: "cover"}}
                alt="Happy students graduating"
                className="absolute inset-0 z-[-1] opacity-80"
                data-ai-hint="graduating students"
            />
            <div className="relative z-10 p-4">
                <h1 className="text-5xl md:text-6xl font-bold font-headline tracking-tight">
                    Our Impact
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                    See the tangible results of our collective effort and generosity.
                </p>
            </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {impactStats.map(stat => (
                        <div key={stat.title} className="flex flex-col items-center">
                            <div className="text-primary text-4xl mb-2">{stat.icon}</div>
                            <p className="text-4xl font-bold font-headline">{stat.value}</p>
                            <p className="text-muted-foreground">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-headline">Success Stories</h2>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Hear directly from the students whose lives we've changed.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {testimonials.map(t => (
                        <Card key={t.id} className="border-0 shadow-lg">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <Image
                                    src={t.avatar}
                                    width={100}
                                    height={100}
                                    alt={t.name}
                                    className="rounded-full mb-4 border-4 border-primary/20"
                                    data-ai-hint="person face"
                                />
                                <p className="text-muted-foreground italic">&ldquo;{t.story}&rdquo;</p>

                                <div className="mt-4 font-semibold">
                                    <p className="text-lg">{t.name}</p>
                                    <p className="text-sm text-primary">{t.program}</p>
                                 </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

         {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold font-headline">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground mt-2 text-lg max-w-2xl mx-auto">
              Your contribution, no matter the size, can change a life. Join us in empowering the next generation of Nigerian leaders.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/donate">
                  Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
