
'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/placeholder-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const authorInfo = teamMembers.find(member => member.name === post?.author);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog">
                <Button variant="outline" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Button>
            </Link>
          </div>

          <main>
            <article>
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                    {authorInfo && (
                         <Avatar className="h-12 w-12">
                            <AvatarImage src={authorInfo.avatar} alt={authorInfo.name} data-ai-hint="person face" />
                            <AvatarFallback>{authorInfo.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    )}
                    <div>
                        <p className="font-semibold text-foreground">{post.author}</p>
                        <p className="text-sm">{post.date}</p>
                    </div>
                </div>
              </header>

              <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={post.imageHint}
                />
              </div>

              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

            </article>
          </main>

          <aside className="mt-16">
              {authorInfo && (
                <Card className="bg-muted border-0">
                    <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-6">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={authorInfo.avatar} alt={authorInfo.name} data-ai-hint="person face" />
                            <AvatarFallback>{authorInfo.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-center sm:text-left">
                            <p className="text-sm text-muted-foreground font-semibold">ABOUT THE AUTHOR</p>
                            <h3 className="text-2xl font-bold font-headline mt-1">{authorInfo.name}</h3>
                            <p className="text-primary font-medium">{authorInfo.role}</p>
                            <p className="text-muted-foreground mt-2">{authorInfo.bio}</p>
                        </div>
                    </CardContent>
                </Card>
              )}
          </aside>
        </div>
      </div>
    </div>
  );
}
