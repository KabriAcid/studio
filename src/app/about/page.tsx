
'use client';

import Image from 'next/image';
import { Target, Users, BookOpen, Handshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/placeholder-data';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
        <motion.section 
            className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white bg-gradient-to-r from-primary to-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                layout="fill"
                objectFit="cover"
                alt="Our team working"
                className="absolute inset-0 z-[-1] opacity-80"
                data-ai-hint="team meeting"
            />
            <motion.div 
                className="relative z-10 p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h1 className="text-5xl md:text-6xl font-bold font-headline tracking-tight">
                    About EduAid HQ
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                    Learn about our journey, our mission, and the passionate team driving change.
                </p>
            </motion.div>
        </motion.section>

        {/* Mission & Vision Section */}
        <motion.section 
            className="py-20 bg-background"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold font-headline mb-4">Our Mission & Vision</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Our mission is to ensure that every determined student in Nigeria has the financial means to pursue their educational goals. We envision a nation where potential is not limited by financial barriers, and every young person can achieve their dreams.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary rounded-full p-3 mt-1">
                            <Target className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl">Our Mission</h4>
                            <p className="text-muted-foreground">To bridge the gap between potential and opportunity by providing transparent and effective financial support to students in need.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary rounded-full p-3 mt-1">
                            <Handshake className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl">Our Vision</h4>
                            <p className="text-muted-foreground">A Nigeria where every student has the chance to succeed, regardless of their financial background.</p>
                        </div>
                    </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                    layout="fill"
                    objectFit="cover"
                    alt="A group of people in a meeting"
                    data-ai-hint="team discussion"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Meet the Team Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-headline">Meet Our Team</h2>
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
