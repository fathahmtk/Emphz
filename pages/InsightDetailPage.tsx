import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { BlogPost } from '../types';
import { getBlogPostBySlug } from '../services/mockApi';
import { Calendar, User } from 'lucide-react';

const InsightDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (slug) {
                setLoading(true);
                const data = await getBlogPostBySlug(slug);
                setPost(data || null);
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
             <div className="container mx-auto px-6 py-12 animate-pulse">
                <div className="h-10 w-3/4 bg-gray-300 rounded mx-auto"></div>
                <div className="mt-8 h-96 bg-gray-300 rounded-lg"></div>
                <div className="mt-8 space-y-4">
                    <div className="h-6 w-full bg-gray-300 rounded"></div>
                    <div className="h-6 w-full bg-gray-300 rounded"></div>
                    <div className="h-6 w-5/6 bg-gray-300 rounded"></div>
                </div>
             </div>
        )
    }

    if (!post) {
        return <div className="text-center py-20">Post not found.</div>;
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <article>
                    <header className="mb-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">{post.title}</h1>
                        <div className="flex justify-center items-center space-x-6 text-gray-500 text-sm">
                            <div className="flex items-center">
                                <User size={14} className="mr-2"/>
                                <span>By {post.author}</span>
                            </div>
                            {post.publishedAt && (
                                <div className="flex items-center">
                                    <Calendar size={14} className="mr-2"/>
                                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                            )}
                        </div>
                    </header>
                    
                    <img src={post.coverUrl} alt={post.title} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-xl mb-8" />
                    
                    <div className="prose lg:prose-xl max-w-none text-text-DEFAULT leading-relaxed">
                        {/* A real app might use a markdown renderer here */}
                        {post.content.split('\n').map((paragraph, index) => (
                           <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <NavLink to="/insights" className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition duration-300">
                            &larr; Back to Insights
                        </NavLink>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default InsightDetailPage;