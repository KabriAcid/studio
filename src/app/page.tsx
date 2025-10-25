
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Handshake, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { heroSlides, teamMembers } from '@/lib/placeholder-data';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

export default function LandingPage() {
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
        },
    };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white">
           <Carousel
                plugins={[plugin.current]}
                className="absolute inset-0 w-full h-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                {heroSlides.map((slide) => (
                    <CarouselItem key={slide.id}>
                         <div className="relative h-[60vh] min-h-[500px] w-full">
                             <Image
                                src={slide.imageUrl}
                                layout="fill"
                                objectFit="cover"
                                alt={slide.alt}
                                className="absolute inset-0 z-[-1] brightness-75"
                                data-ai-hint={slide.imageHint}
                            />
                         </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
         
          <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight">
              Empowering Futures Through Education
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              We provide financial aid and support to dedicated students, helping them achieve their academic dreams and build a brighter tomorrow.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/donate">Donate Now</Link>
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

        {/* Meet the Team Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-headline">Meet Our Officials</h2>
              <p className="text-muted-foreground mt-2 text-lg">
                The dedicated individuals behind our mission.
              </p>
            </div>
            <motion.div 
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
              {teamMembers.map((member) => (
                <motion.div key={member.id} variants={itemVariants}>
                    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/20">
                                <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="person face" />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary font-medium">{member.role}</p>
                            <p className="text-muted-foreground mt-2 text-sm">
                            {member.bio}
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
