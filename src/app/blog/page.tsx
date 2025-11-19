
'use client';
import { useMemo } from 'react';
import { collection, getDocs, orderBy, query, limit, getDoc, doc } from 'firebase/firestore';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore } from '@/firebase';
import type { BlogPost, BlogAuthor } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { BlogPostCard } from '@/components/blog-post-card';


function PostSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <Skeleton className="aspect-video w-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mt-2" />
        </div>
    )
}

export default function BlogPage() {
    const firestore = useFirestore();
    
    const postsQuery = useMemo(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'blog_posts'), orderBy('publishedAt', 'desc'));
    }, [firestore]);

    const { data: posts, isLoading: postsLoading } = useCollection<BlogPost>(postsQuery);

    const authorsQuery = useMemo(() => {
        if (!firestore) return null;
        return collection(firestore, 'blog_authors');
    }, [firestore]);

    const { data: authors, isLoading: authorsLoading } = useCollection<BlogAuthor>(authorsQuery);

    const postsWithAuthors = useMemo(() => {
        if (!posts || !authors) return [];
        return posts.map(post => ({
            ...post,
            author: authors.find(author => author.id === post.authorId)
        }));
    }, [posts, authors]);


  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                The EMPHZ Blog
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                Insights on GRP technology, manufacturing excellence, and project case studies from the experts at EMPHZ.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(postsLoading || authorsLoading) && Array.from({length: 3}).map((_, i) => <PostSkeleton key={i} />)}
            {postsWithAuthors.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 100}>
                <BlogPostCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
