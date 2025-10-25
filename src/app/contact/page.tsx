
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
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
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="you@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                             <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                             <Input id="subject" placeholder="What is this about?" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea id="message" placeholder="Your message..." rows={5} />
                        </div>
                        <Button type="submit" className="w-full" size="lg">Send Message</Button>
                    </form>
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
                        <p className="text-muted-foreground">+234 801 234 5678</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
