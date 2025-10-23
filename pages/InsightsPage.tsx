import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BlogPost } from '../types';
import { getBlogPosts } from '../services/mockApi';
import Breadcrumbs from '../components/Breadcrumbs';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-105 border border-border dark:border-slate-700">
        <NavLink to={`/insights/${post.slug}`} className="block">
            <img src={post.coverUrl} alt={post.title} className="w-full h-56 object-cover"/>
        </NavLink>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-accent mb-2">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Draft'}
            </p>
            <h3 className="text-xl font-bold font-heading text-text-DEFAULT dark:text-white mb-3">{post.title}</h3>
            <p className="text-text-secondary dark:text-slate-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
            <NavLink to={`/insights/${post.slug}`} className="mt-auto font-semibold text-accent hover:text-accent-hover self-start">
                Read More &rarr;
            </NavLink>
        </div>
    </div>
);


const InsightsPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    usePageMetadata(
        "EMPHZ GRP Engineering Insights | The GRP Company Blog",
        "Official engineering insights from EMPHZ, The GRP Company. Explore expert articles on GRP technology, composite materials, sustainability, and advanced industry applications.",
        "EMPHZ engineering insights, GRP technology, composite engineering, GRP sustainability, composite materials, EMPHZ blog, The GRP Company"
    );

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const data = await getBlogPosts();
            setPosts(data.filter(p => p.published)); // Only show published posts
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const breadcrumbLinks = [
        { name: 'Home', path: '/' },
        { name: 'Insights' }
    ];

    return (
        <div className="bg-background-light dark:bg-slate-900 min-h-screen">
            <div className="bg-background dark:bg-slate-800 relative overflow-hidden">
                 <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1920&auto=format&fit=crop" alt="Abstract background texture" className="w-full h-full object-cover opacity-50 dark:opacity-10" />
                    <div className="absolute inset-0 bg-white/95 dark:bg-slate-800/95"></div>
                </div>
                <div className="relative">
                    <Breadcrumbs links={breadcrumbLinks} />
                    <div className="container mx-auto px-6 py-12 text-center">
                        <h1 className="text-4xl font-bold font-heading text-primary dark:text-white mb-2">EMPHZ GRP Engineering Insights</h1>
                        <p className="text-lg text-text-secondary dark:text-slate-400">GRP Technology, Innovation, and Sustainability from The GRP Company.</p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                           <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md animate-pulse h-[450px]"></div>
                        ))
                    ) : (
                        posts.map(post => (
                           <BlogPostCard key={post.id} post={post} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default InsightsPage;