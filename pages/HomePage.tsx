import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Zap, Wind, Recycle } from 'lucide-react';
import { Product } from '../types';
import { getFeaturedProducts } from '../services/mockApi';
import { ProductCard } from '../components/ProductCard';

const ValueBadge: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center space-x-2 text-text-secondary">
        {icon}
        <span className="font-semibold text-sm">{text}</span>
    </div>
);

const HomePage: React.FC = () => {
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products = await getFeaturedProducts();
            setFeaturedProducts(products);
            setLoading(false);
        };
        fetchProducts();
        
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const heroImages = featuredProducts.slice(0, 4);

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="bg-background-light relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-accent-light to-background animate-gradient-xy"></div>
                <div className="container mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center relative z-10">
                    <h1 className={`text-4xl sm:text-5xl md:text-7xl font-extrabold text-text-DEFAULT mb-6 leading-tight tracking-tight transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        India’s Most Advanced GRP Solutions Manufacturer
                    </h1>
                    <p className={`text-lg md:text-xl text-text-secondary mb-10 max-w-3xl mx-auto transition-opacity duration-1000 ease-out delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                        Engineering Tomorrow’s Infrastructure — Today.
                    </p>
                    <div className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 ease-out delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <NavLink to="/products" className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-hover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Explore Products
                        </NavLink>
                        <NavLink to="/contact" className="w-full sm:w-auto bg-gray-200 text-text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
                            Request a Quote
                        </NavLink>
                    </div>

                     {/* Animated Hero Images */}
                    <div className="mt-20 max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-64 md:h-80">
                            <div className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '100ms'}}>
                                <img src={heroImages[0]?.imageUrls[0]} alt="GRP Enclosure" className="w-full h-full object-cover rounded-lg shadow-xl"/>
                            </div>
                            <div className={`pt-12 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '200ms'}}>
                                 <img src={heroImages[1]?.imageUrls[0]} alt="Feeder Pillar" className="w-full h-full object-cover rounded-lg shadow-xl"/>
                            </div>
                            <div className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '300ms'}}>
                                 <img src={heroImages[2]?.imageUrls[0]} alt="Guard Cabin" className="w-full h-full object-cover rounded-lg shadow-xl"/>
                            </div>
                            <div className={`pt-12 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '400ms'}}>
                                 <img src={heroImages[3]?.imageUrls[0]} alt="Junction Box" className="w-full h-full object-cover rounded-lg shadow-xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-background">
                 <div className="container mx-auto px-6">
                    <div className="flex justify-center flex-wrap gap-x-10 gap-y-6">
                        <ValueBadge icon={<ShieldCheck className="text-primary-medium" />} text="IP66 Weatherproof" />
                        <ValueBadge icon={<Zap className="text-primary-medium" />} text="UL 94 V-0 Fire Safe" />
                        <ValueBadge icon={<Wind className="text-primary-medium" />} text="Non-Conductive" />
                        <ValueBadge icon={<Recycle className="text-primary-medium" />} text="UV/Corrosion-Proof" />
                    </div>
                 </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-background-light">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-text-DEFAULT mb-4">Featured Product Families</h2>
                        <p className="text-text-secondary mb-12">GRP products that outperform steel and aluminum in strength, longevity, and environmental impact.</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {loading ? (
                         Array.from({ length: 6 }).map((_, index) => (
                           <div key={index} className="bg-white rounded-lg border border-border animate-pulse h-[450px]"></div>
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
             <section className="bg-primary text-white py-20 sm:py-24">
                <div className="container mx-auto px-6 text-center">
                    <img src="https://picsum.photos/seed/ceo/120/120" alt="Muhammed Rashik P, CEO" className="w-28 h-28 rounded-full mx-auto mb-8 border-4 border-primary-medium"/>
                    <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium max-w-5xl mx-auto mb-6 leading-snug">
                        “We don’t just mold GRP — we mold confidence. Our mission is to engineer trust through safer, smarter, more sustainable composites.”
                    </blockquote>
                    <cite className="not-italic font-semibold text-lg text-gray-300">Muhammed Rashik P, CEO</cite>
                </div>
            </section>
        </div>
    );
};

export default HomePage;