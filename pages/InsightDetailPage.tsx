import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { BlogPost } from '../types';
import { getBlogPostBySlug, getLatestBlogPosts } from '../services/mockApi';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';

const InsightCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <div className="group [perspective:1000px] h-full">
            <div className="relative bg-white rounded-lg border border-border overflow-hidden flex flex-col h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(5deg)] shadow-md hover:shadow-2xl">
                <div className="relative">
                    <img src={post.coverUrl} alt={post.title} className="w-full h-48 object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs text-text-secondary mb-2">{new Date(post.publishedAt!).toLocaleDateString()}</p>
                    <h3 className="text-lg font-bold font-heading text-text-DEFAULT mb-2 flex-grow">{post.title}</h3>
                    <NavLink to={`/insights/${post.slug}`} className="relative z-10 mt-4 font-semibold text-accent hover:text-accent-hover flex items-center group-hover:gap-3 transition-all duration-300">
                        Read More <ArrowRight size={16} className="ms-1" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

const InsightDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    usePageMetadata(
        post ? `${post.title} | An EMPHZ GRP Engineering Insight` : "EMPHZ GRP Insight",
        post ? `${post.excerpt} - A deep dive from EMPHZ, The GRP Company.` : "Expert insights from EMPHZ Global.",
        post ? `${post.title}, EMPHZ GRP, GRP insights, composite engineering, The GRP Company` : "EMPHZ GRP"
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchPost = async () => {
            if (slug) {
                setLoading(true);
                const [postData, allLatestPosts] = await Promise.all([
                    getBlogPostBySlug(slug),
                    getLatestBlogPosts(3)
                ]);
                
                setPost(postData || null);
                // Filter out the current post from the latest posts list
                setLatestPosts(allLatestPosts.filter(p => p.slug !== slug).slice(0, 2));
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
             <div className="container mx-auto px-6 py-12 animate-pulse">
                <div className="h-6 w-1/3 bg-gray-300 rounded mb-4"></div>
                <div className="h-10 w-3/4 bg-gray-300 rounded mx-auto mt-4"></div>
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
         const notFoundBreadcrumbs = [
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: 'Not Found' },
        ];
        return (
            <div>
                <Breadcrumbs links={notFoundBreadcrumbs} />
                <div className="text-center py-20">Post not found.</div>
            </div>
        );
    }
    
    const breadcrumbLinks = [
        { name: 'Home', path: '/' },
        { name: 'Insights', path: '/insights' },
        { name: post.title },
    ];

    return (
        <div className="bg-white">
            <Breadcrumbs links={breadcrumbLinks} />
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <article>
                    <header className="mb-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4 leading-tight tracking-tight">{post.title}</h1>
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
                </article>
            </div>

            {latestPosts.length > 0 && (
                <div className="bg-background-light pt-12 pb-20">
                    <SectionDivider />
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-8 text-center">Latest Insights</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
                           {latestPosts.map((post) => (
                               <InsightCard key={post.id} post={post} />
                           ))}
                        </div>
                         <div className="mt-12 text-center">
                            <NavLink to="/insights" className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-hover transition duration-300">
                                View All Insights
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InsightDetailPage;