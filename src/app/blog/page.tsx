'use server';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { getFirestore } from '@/firebase/server';
import type { BlogPost, BlogAuthor } from '@/lib/types';
import { BlogPostCard } from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';
import { getAuthorsWithIds } from '@/lib/seed-data';

const POSTS_PER_PAGE = 6;


async function getPosts() {
    const firestore = getFirestore();
    const postsRef = collection(firestore, 'blog_posts');
    const q = query(postsRef, orderBy('publishedAt', 'desc'), limit(POSTS_PER_PAGE));
    const querySnapshot = await getDocs(q);

    const posts: BlogPost[] = [];
    querySnapshot.forEach(doc => {
        posts.push({ id: doc.id, ...doc.data() } as BlogPost);
    });
    
    // In a real app, you might fetch authors based on authorId from posts
    // For this prototype, we'll fetch all authors and map them.
    const authors = getAuthorsWithIds();

    const postsWithAuthors = posts.map(post => ({
        ...post,
        author: authors.find(author => author.id === post.authorId)
    }));

    return postsWithAuthors;
}


export default async function BlogPage() {
    
    const initialPosts = await getPosts();

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
            {initialPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 100}>
                <BlogPostCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Button disabled>
              Previous
            </Button>
            <Button disabled={initialPosts.length < POSTS_PER_PAGE}>
              Next
            </Button>
          </div>
            <p className="text-center text-muted-foreground text-sm mt-4">Pagination will be implemented in a future step.</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
