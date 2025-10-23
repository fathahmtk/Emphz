
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Zap, Wind, Recycle } from 'lucide-react';
import { Product } from '../types';
import { getFeaturedProducts } from '../services/mockApi';
import { ProductCard } from '../components/ProductCard';

const ValueBadge: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center space-x-2 text-gray-600">
        {icon}
        <span className="font-medium text-sm">{text}</span>
    </div>
);

const HomePage: React.FC = () => {
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products = await getFeaturedProducts();
            setFeaturedProducts(products);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return (
        <div className="bg-neutral-light">
            {/* Hero Section */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 leading-tight">
                        India’s Most Advanced GRP Solutions Manufacturer
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Engineering Tomorrow’s Infrastructure — Today.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <NavLink to="/products" className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition duration-300">
                            Explore Products
                        </NavLink>
                        <NavLink to="/contact" className="bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-600 transition duration-300">
                            Request a Quote
                        </NavLink>
                    </div>
                    <div className="mt-12 flex justify-center flex-wrap gap-x-8 gap-y-4">
                        <ValueBadge icon={<ShieldCheck className="text-accent" />} text="IP66 Weatherproof" />
                        <ValueBadge icon={<Zap className="text-accent" />} text="UL 94 V-0 Fire Safe" />
                        <ValueBadge icon={<Wind className="text-accent" />} text="Non-Conductive" />
                        <ValueBadge icon={<Recycle className="text-accent" />} text="UV/Corrosion-Proof" />
                    </div>
                </div>
            </section>
            
            {/* Featured Products */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Featured Product Families</h2>
                    <p className="text-center text-gray-500 mb-12">GRP products that outperform steel and aluminum in strength, longevity, and impact.</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {loading ? (
                         Array.from({ length: 6 }).map((_, index) => (
                           <div key={index} className="bg-white rounded-lg shadow-md animate-pulse h-96"></div>
                         ))
                       ) : (
                         featuredProducts.map(product => (
                           <ProductCard key={product.id} product={product} />
                         ))
                       )}
                    </div>
                </div>
            </section>

            {/* CEO Message */}
             <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <img src="https://picsum.photos/seed/ceo/100/100" alt="Muhammed Rashik P, CEO" className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-accent"/>
                    <blockquote className="text-2xl md:text-3xl font-medium max-w-4xl mx-auto mb-4">
                        “We don’t just mold GRP — we mold confidence. Our mission is to engineer trust through safer, smarter, more sustainable composites.”
                    </blockquote>
                    <cite className="not-italic font-semibold text-accent">Muhammed Rashik P, CEO</cite>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
