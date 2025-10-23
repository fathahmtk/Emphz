import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BlogPost } from '../types';
import { getBlogPosts } from '../services/mockApi';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-105">
        <NavLink to={`/insights/${post.slug}`} className="block">
            <img src={post.coverUrl} alt={post.title} className="w-full h-56 object-cover"/>
        </NavLink>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-primary mb-2">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Draft'}
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
            <NavLink to={`/insights/${post.slug}`} className="mt-auto font-semibold text-primary hover:underline self-start">
                Read More &rarr;
            </NavLink>
        </div>
    </div>
);


const InsightsPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const data = await getBlogPosts();
            setPosts(data.filter(p => p.published)); // Only show published posts
            setLoading(false);
        };
        fetchPosts();
    }, []);

    return (
        <div className="bg-neutral-light min-h-screen">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-primary mb-2">Insights & Articles</h1>
                    <p className="text-lg text-gray-600">Explore our latest thinking on composite engineering, industry trends, and sustainability.</p>
                </div>

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
