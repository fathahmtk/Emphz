
'use client';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs, doc, getDoc, limit } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import type { BlogPost, BlogAuthor } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { PageHero } from '@/components/layout/page-hero';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { AuthorAvatar } from '@/components/author-avatar';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const firestore = useFirestore();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [author, setAuthor] = useState<BlogAuthor | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!firestore || !params.slug) return;

        const fetchPost = async () => {
            setIsLoading(true);
            try {
                const postsRef = collection(firestore, 'blog_posts');
                const q = query(postsRef, where("slug", "==", params.slug), limit(1));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    setError('Post not found');
                    return;
                }

                const postDoc = querySnapshot.docs[0];
                const postData = { id: postDoc.id, ...postDoc.data() } as BlogPost;
                setPost(postData);

                if (postData.authorId) {
                    const authorRef = doc(firestore, 'blog_authors', postData.authorId);
                    const authorSnap = await getDoc(authorRef);
                    if (authorSnap.exists()) {
                        setAuthor({ id: authorSnap.id, ...authorSnap.data() } as BlogAuthor);
                    }
                }
            } catch (err) {
                console.error(err);
                setError('Failed to load post.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [firestore, params.slug]);

    if (isLoading) {
        return (
            <>
                <SiteHeader />
                <div className="container py-12 md:py-20">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-6 w-1/2 mb-8" />
                    <Skeleton className="h-[400px] w-full mb-8" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-2" />
                </div>
                <SiteFooter />
            </>
        );
    }
    
    if (error) {
        notFound();
    }

    if (!post) {
        return null; // Or some other state
    }

    return (
        <>
            <SiteHeader />
             <PageHero 
                title={post.title}
                description={post.summary}
                imageUrl={post.heroImageUrl}
                imageHint="blog post hero"
             />
            <main className="py-12 md:py-20">
                <article className="container max-w-3xl mx-auto">
                    <header className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                             <Badge variant="outline">{post.category}</Badge>
                             <time dateTime={post.publishedAt.toDate().toISOString()} className="text-sm text-muted-foreground">
                                {format(post.publishedAt.toDate(), 'MMMM d, yyyy')}
                            </time>
                        </div>
                       {author && <AuthorAvatar author={author} />}
                    </header>
                    <div className="prose dark:prose-invert prose-p:text-foreground/80 prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
                       <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {post.content}
                       </ReactMarkdown>
                    </div>
                </article>
            </main>
            <SiteFooter />
        </>
    );
}
