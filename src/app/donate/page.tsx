
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, CreditCard, Banknote } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function DonatePage() {
    const { toast } = useToast();

    const accountDetails = {
        bankName: "Jaiz Bank Plc",
        accountName: "EduAid HQ",
        accountNumber: "0012345678",
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast({
            title: "Copied to clipboard!",
            description: `${text} has been copied.`,
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        },
    };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
         {/* Hero Section */}
        <motion.section 
            className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                layout="fill"
                objectFit="cover"
                alt="A person giving a donation"
                className="absolute inset-0 z-[-1] opacity-90"
                data-ai-hint="donation hands"
            />
            <motion.div 
                className="relative z-10 p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h1 className="text-5xl md:text-6xl font-bold font-headline tracking-tight">
                    Support Our Cause
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                   Your generosity fuels our mission. Every contribution, big or small, creates a ripple of change.
                </p>
            </motion.div>
        </motion.section>

        {/* Donation Options Section */}
        <motion.section 
            className="py-20 bg-background"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-headline">Choose Your Way to Give</h2>
                    <p className="text-muted-foreground mt-2 text-lg">
                        We offer multiple ways for you to support our work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div variants={itemVariants}>
                        <Card className="shadow-lg h-full">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 text-primary rounded-full p-3">
                                        <Banknote className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl font-headline">Direct Bank Transfer</CardTitle>
                                        <CardDescription>For donations within Nigeria.</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-3 rounded-lg border bg-muted/50 p-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Bank Name</p>
                                            <p className="font-semibold">{accountDetails.bankName}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                         <div>
                                            <p className="text-sm text-muted-foreground">Account Name</p>
                                            <p className="font-semibold">{accountDetails.accountName}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Account Number</p>
                                            <p className="font-semibold text-lg">{accountDetails.accountNumber}</p>
                                        </div>
                                        <Button variant="ghost" size="icon" onClick={() => handleCopy(accountDetails.accountNumber)}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground text-center">
                                    After making a transfer, you can optionally send us a notification at contact@eduaidhq.org for a receipt.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Card className="shadow-lg h-full">
                             <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 text-primary rounded-full p-3">
                                        <CreditCard className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl font-headline">Pay with Card</CardTitle>
                                        <CardDescription>Secure payments via our partners.</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center justify-center space-y-4 h-full pt-10">
                               <Button size="lg" className="w-full max-w-xs" onClick={() => toast({ title: "Coming Soon!", description: "Paystack integration is being finalized."})}>
                                    <Image src="/paystack-logo.svg" alt="Paystack" width={100} height={24} className="h-6 w-auto" />
                               </Button>
                               <Button size="lg" className="w-full max-w-xs" onClick={() => toast({ title: "Coming Soon!", description: "Stripe integration is being finalized."})}>
                                    <Image src="/stripe-logo.svg" alt="Stripe" width={70} height={24} className="h-6 w-auto" />
                               </Button>
                                <p className="text-xs text-muted-foreground text-center pt-4">
                                   Suitable for both local and international donations.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.section>

      </main>
    </div>
  );
}
