
'use client';
import { useState, useMemo, useEffect } from 'react';
import { collection, getDocs, orderBy, query, limit, startAfter, endBefore, limitToLast, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useFirestore } from '@/firebase';
import type { BlogPost, BlogAuthor } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { BlogPostCard } from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';

const POSTS_PER_PAGE = 6;

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
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [authors, setAuthors] = useState<BlogAuthor[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [firstVisible, setFirstVisible] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
    const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    
    const fetchPosts = async (direction: 'next' | 'prev' | 'initial' = 'initial') => {
        if (!firestore) return;
        setIsLoading(true);

        const postsRef = collection(firestore, 'blog_posts');
        let q;

        if (direction === 'next' && lastVisible) {
            q = query(postsRef, orderBy('publishedAt', 'desc'), startAfter(lastVisible), limit(POSTS_PER_PAGE + 1));
        } else if (direction === 'prev' && firstVisible) {
            q = query(postsRef, orderBy('publishedAt', 'desc'), endBefore(firstVisible), limitToLast(POSTS_PER_PAGE));
        } else {
            q = query(postsRef, orderBy('publishedAt', 'desc'), limit(POSTS_PER_PAGE + 1));
        }

        try {
            const documentSnapshots = await getDocs(q);
            
            const newPosts: BlogPost[] = [];
            documentSnapshots.forEach(doc => {
                newPosts.push({ id: doc.id, ...doc.data() } as BlogPost);
            });

            if (direction === 'prev') {
                setPosts(newPosts);
            } else {
                 const hasNext = newPosts.length > POSTS_PER_PAGE;
                setIsNextPageAvailable(hasNext);
                setPosts(newPosts.slice(0, POSTS_PER_PAGE));
            }

            setFirstVisible(documentSnapshots.docs[0]);
            setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length > POSTS_PER_PAGE ? POSTS_PER_PAGE - 1 : documentSnapshots.docs.length - 1]);
            
        } catch (error) {
            console.error("Error fetching posts: ", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        fetchPosts();
         if (firestore) {
            const authorsRef = collection(firestore, 'blog_authors');
            getDocs(authorsRef).then(snapshot => {
                const authorData: BlogAuthor[] = [];
                snapshot.forEach(doc => authorData.push({ id: doc.id, ...doc.data() } as BlogAuthor));
                setAuthors(authorData);
            });
        }
    }, [firestore]);


    const postsWithAuthors = useMemo(() => {
        if (!posts || !authors) return [];
        return posts.map(post => ({
            ...post,
            author: authors.find(author => author.id === post.authorId)
        }));
    }, [posts, authors]);
    
    const handleNext = () => {
        if (isNextPageAvailable) {
            setCurrentPage(p => p + 1);
            fetchPosts('next');
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(p => p - 1);
            fetchPosts('prev');
        }
    };

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
            {isLoading && Array.from({length: 6}).map((_, i) => <PostSkeleton key={i} />)}
            {!isLoading && postsWithAuthors.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 100}>
                <BlogPostCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Button onClick={handlePrev} disabled={currentPage === 1 || isLoading}>
              Previous
            </Button>
            <Button onClick={handleNext} disabled={!isNextPageAvailable || isLoading}>
              Next
            </Button>
          </div>

        </div>
      </main>
      <SiteFooter />
    </>
  );
}
