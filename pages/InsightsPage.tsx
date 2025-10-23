import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BlogPost } from '../types';
import { getBlogPosts } from '../services/mockApi';
import Breadcrumbs from '../components/Breadcrumbs';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-105 border border-border">
        <NavLink to={`/insights/${post.slug}`} className="block">
            <img src={post.coverUrl} alt={post.title} className="w-full h-56 object-cover"/>
        </NavLink>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-accent mb-2">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Draft'}
            </p>
            <h3 className="text-xl font-bold font-heading text-text-DEFAULT mb-3">{post.title}</h3>
            <p className="text-text-secondary text-sm mb-4 flex-grow">{post.excerpt}</p>
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
        "EMPHZ Engineering Blog | GRP Technology & Innovation",
        "Read the latest on GRP technology from the experts at EMPHZ, The GRP Company. Our insights cover composite engineering, sustainability, and market trends.",
        "EMPHZ GRP insights, GRP technology, composite engineering blog, GRP trends, The GRP Company, EMPHZ Global"
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
        <div className="bg-background-light min-h-screen">
            <div className="bg-background relative overflow-hidden">
                 <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1920&auto=format&fit=crop" alt="Abstract background texture" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-white/95"></div>
                </div>
                <div className="relative">
                    <Breadcrumbs links={breadcrumbLinks} />
                    <div className="container mx-auto px-6 py-12 text-center">
                        <h1 className="text-4xl font-bold font-heading text-primary mb-2">EMPHZ GRP Engineering Insights</h1>
                        <p className="text-lg text-text-secondary">Explore our latest thinking on composite engineering, industry trends, and the future of GRP technology.</p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                           <div key={index} className="bg-white rounded-lg shadow-md animate-pulse h-[450px]"></div>
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