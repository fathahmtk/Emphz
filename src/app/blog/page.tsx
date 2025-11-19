
'use server';
import { collection, getDocs, orderBy, query, limit, getDoc, doc, startAfter, endBefore, limitToLast } from 'firebase/firestore';
import Link from 'next/link';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { getFirestore } from '@/firebase/server';
import type { BlogPost, BlogAuthor } from '@/lib/types';
import { BlogPostCard } from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';
import { getAuthorsWithIds } from '@/lib/seed-data';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';


const POSTS_PER_PAGE = 6;

async function getPosts(searchParams: { [key: string]: string | string[] | undefined }) {
    const firestore = getFirestore();
    const postsRef = collection(firestore, 'blog_posts');
    
    const afterId = searchParams.after as string;
    const beforeId = searchParams.before as string;

    let q = query(postsRef, orderBy('publishedAt', 'desc'), limit(POSTS_PER_PAGE));
    
    let isPrevDisabled = !beforeId;
    let isNextDisabled = false;

    if (afterId) {
        const lastDoc = await getDoc(doc(postsRef, afterId));
        if (lastDoc.exists()) {
            q = query(postsRef, orderBy('publishedAt', 'desc'), startAfter(lastDoc), limit(POSTS_PER_PAGE));
        }
        isPrevDisabled = false; // If we're on a "next" page, we can always go back.
    } else if (beforeId) {
        const firstDoc = await getDoc(doc(postsRef, beforeId));
        if (firstDoc.exists()) {
            q = query(postsRef, orderBy('publishedAt', 'desc'), endBefore(firstDoc), limitToLast(POSTS_PER_PAGE));
        }
    }


    const querySnapshot = await getDocs(q);

    const posts: BlogPost[] = [];
    querySnapshot.forEach(doc => {
        posts.push({ id: doc.id, ...doc.data() } as BlogPost);
    });

    if (beforeId && querySnapshot.docs.length < POSTS_PER_PAGE) {
        isPrevDisabled = true;
    }

    if (afterId && querySnapshot.docs.length < POSTS_PER_PAGE) {
        isNextDisabled = true;
    }
    
    // To check if there's a next page from the initial load
    if(!afterId && !beforeId) {
        if(posts.length < POSTS_PER_PAGE) {
            isNextDisabled = true;
        } else {
             const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
             const nextQuery = query(postsRef, orderBy('publishedAt', 'desc'), startAfter(lastVisible), limit(1));
             const nextSnapshot = await getDocs(nextQuery);
             if (nextSnapshot.empty) {
                isNextDisabled = true;
             }
        }
    }


    const authors = getAuthorsWithIds();

    const postsWithAuthors = posts.map(post => ({
        ...post,
        author: authors.find(author => author.id === post.authorId)
    }));

    return {
        posts: postsWithAuthors,
        firstPostId: posts.length > 0 ? posts[0].id : null,
        lastPostId: posts.length > 0 ? posts[posts.length - 1].id : null,
        isPrevDisabled,
        isNextDisabled,
    };
}


export default async function BlogPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    
    const { posts, firstPostId, lastPostId, isPrevDisabled, isNextDisabled } = await getPosts(searchParams);

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
            {posts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 100}>
                <BlogPostCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Button asChild variant="outline" disabled={isPrevDisabled} className={cn(isPrevDisabled && "pointer-events-none")}>
                <Link href={`/blog?before=${firstPostId}`}>
                    <ArrowLeft className="mr-2"/> Previous
                </Link>
            </Button>
            <Button asChild variant="outline" disabled={isNextDisabled} className={cn(isNextDisabled && "pointer-events-none")}>
                <Link href={`/blog?after=${lastPostId}`}>
                    Next <ArrowRight className="ml-2"/>
                </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
