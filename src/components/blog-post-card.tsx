
'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { format } from 'date-fns';

import type { BlogPost } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AuthorAvatar } from "./author-avatar";

interface BlogPostCardProps {
    post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {

    return (
        <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video">
                    <Image
                        src={post.heroImageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </Link>
            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <time dateTime={post.publishedAt.toDate().toISOString()} className="text-sm text-muted-foreground">
                        {format(post.publishedAt.toDate(), 'MMMM d, yyyy')}
                    </time>
                </div>
                <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">
                     <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="line-clamp-3">{post.summary}</CardDescription>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
                 <AuthorAvatar author={post.author} />
                <Button asChild variant="link" className="p-0 h-auto group/link">
                     <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
