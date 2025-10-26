
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contactSchema } from "@/lib/validation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof contactSchema>) {
        console.log(values);
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. We'll get back to you shortly.",
        });
        form.reset();
    }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-headline">Get In Touch</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            We'd love to hear from you. Whether you have a question, a proposal, or just want to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="shadow-lg">
                <CardContent className="p-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <div className="grid sm:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your Phone Number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="What is this about?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Your message..." rows={5} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" size="lg">Send Message</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-full p-3">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Our Office</h3>
                        <p className="text-muted-foreground">123 Education Way, Yola, Adamawa State, Nigeria</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-full p-3">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">contact@eduaidhq.org</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-full p-3">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Call Us</h3>
                        <a href="tel:+2348012345678" className="text-muted-foreground hover:text-primary">+234 801 234 5678</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
