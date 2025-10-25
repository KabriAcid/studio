
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

// Placeholder blog data
const blogPosts = [
  {
    slug: 'first-post',
    title: 'How We Started: The EduAid HQ Story',
    excerpt: 'Discover the inspiration and journey behind our mission to empower students across Nigeria.',
    author: 'Amina Yusuf',
    date: 'October 26, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'students classroom'
  },
  {
    slug: 'second-post',
    title: 'Impact Stories: Meet Aisha Mohammed',
    excerpt: 'Aisha, one of our first beneficiaries, shares her story of academic success and how EduAid HQ made a difference.',
    author: 'Tunde Adekunle',
    date: 'October 20, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'student graduation'
  },
  {
    slug: 'third-post',
    title: 'The Importance of Corporate Sponsorship in Education',
    excerpt: 'Learn how corporate partnerships are crucial in creating sustainable educational opportunities for the next generation.',
    author: 'Chinedu Okoro',
    date: 'October 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1571260899104-606c11d74d29?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'business handshake'
  },
];

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
