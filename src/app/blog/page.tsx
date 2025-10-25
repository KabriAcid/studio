
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from "@/lib/placeholder-data";


export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-headline">Our Blog</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Stories, updates, and insights from the EduAid HQ team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-56 w-full">
                    <Image 
                        src={post.imageUrl}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={post.imageHint}
                    />
                </div>
              </Link>
              <CardHeader>
                <CardTitle className="text-xl font-bold font-headline leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                    </Link>
                </CardTitle>
                <div className="text-sm text-muted-foreground pt-2">
                    <span>By {post.author}</span> &bull; <span>{post.date}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                 <Link href={`/blog/${post.slug}`} className="font-semibold text-primary inline-flex items-center gap-1 group">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                 </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
