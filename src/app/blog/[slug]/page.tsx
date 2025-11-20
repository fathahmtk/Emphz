
'use server';
import { collection, query, where, getDocs, doc, getDoc, limit } from 'firebase/firestore';
import { getFirestore } from '@/firebase/server';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import type { BlogPost, BlogAuthor } from '@/lib/types';
import { PageHero } from '@/components/layout/page-hero';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { AuthorAvatar } from '@/components/author-avatar';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ScrollReveal } from '@/components/scroll-reveal';

async function getPost(slug: string): Promise<{ post: BlogPost; author: BlogAuthor | null } | null> {
    const firestore = getFirestore();
    const postsRef = collection(firestore, 'blog_posts');
    const q = query(postsRef, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return null;
    }

    const postDoc = querySnapshot.docs[0];
    const postData = { id: postDoc.id, ...postDoc.data() } as BlogPost;

    let author: BlogAuthor | null = null;
    if (postData.authorId) {
        const authorRef = doc(firestore, 'blog_authors', postData.authorId);
        const authorSnap = await getDoc(authorRef);
        if (authorSnap.exists()) {
            author = { id: authorSnap.id, ...authorSnap.data() } as BlogAuthor;
        }
    }

    return { post: postData, author };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const data = await getPost(params.slug);

    if (!data) {
        notFound();
    }
    const { post, author } = data;

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
                             <Badge variant="secondary">{post.category}</Badge>
                             <time dateTime={post.publishedAt.toDate().toISOString()} className="text-sm text-muted-foreground">
                                {format(post.publishedAt.toDate(), 'MMMM d, yyyy')}
                            </time>
                        </div>
                       {author && <AuthorAvatar author={author} />}
                    </header>

                    <div className="prose dark:prose-invert prose-p:text-foreground/80 prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 max-w-none mt-8">
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
