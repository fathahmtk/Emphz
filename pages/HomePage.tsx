import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShieldCheck, Zap, Layers, Wrench, Cpu, GitMerge, PackageCheck, ArrowRight
} from 'lucide-react';
import { Product, BlogPost } from '../types';
import { getFeaturedProducts, getLatestBlogPosts } from '../services/mockApi';
import { ProductCard } from '../components/ProductCard';

const useScrollAnimation = () => {
    const refs = useRef<(HTMLElement | null)[]>([]);
    const addToRefs = (el: HTMLElement | null) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const currentRefs = refs.current;
        currentRefs.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return addToRefs;
};

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
        <div className="flex items-center justify-center bg-accent-light text-accent w-16 h-16 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-heading text-text-DEFAULT mb-2">{title}</h3>
        <p className="text-text-secondary text-sm">{children}</p>
    </div>
);

const IndustryCard: React.FC<{ name: string; imageUrl: string }> = ({ name, imageUrl }) => (
    <div className="relative rounded-lg overflow-hidden group aspect-w-1 aspect-h-1">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-2xl font-bold font-heading">{name}</h3>
        </div>
        <NavLink to="/solutions" className="absolute inset-0" aria-label={`View solutions for ${name}`}></NavLink>
    </div>
);

const InsightCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-lg border border-border overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
        <div className="relative">
            <img src={post.coverUrl} alt={post.title} className="w-full h-48 object-cover" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-xs text-text-secondary mb-2">{new Date(post.publishedAt!).toLocaleDateString()}</p>
            <h3 className="text-lg font-bold font-heading text-text-DEFAULT mb-2 flex-grow">{post.title}</h3>
            <NavLink to={`/insights/${post.slug}`} className="mt-4 font-semibold text-accent hover:text-accent-hover flex items-center group-hover:gap-3 transition-all duration-300">
                Read More <ArrowRight size={16} className="ml-1" />
            </NavLink>
        </div>
    </div>
);

const HomePage: React.FC = () => {
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const animatedRef = useScrollAnimation();

    useEffect(() => {
        document.title = "EMPHZ Private Limited | Custom GRP Solutions Manufacturer";
        const setMetaTag = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };
        setMetaTag('description', "EMPHZ is India's leading manufacturer of custom GRP solutions. We specialize in bespoke engineering for any quantity, delivering durable, safe, and high-performance composite products.");
        setMetaTag('keywords', "EMPHZ Private Limited, GRP solutions, custom GRP, composite engineering, GRP enclosures, feeder pillars, GRP kiosks, India");

        const fetchData = async () => {
            setLoading(true);
            const [products, posts] = await Promise.all([
                getFeaturedProducts(),
                getLatestBlogPosts(2)
            ]);
            setFeaturedProducts(products);
            setLatestPosts(posts);
            setLoading(false);
        };
        fetchData();
        
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-background overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-primary-dark text-white py-20 md:py-32 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-black opacity-80"></div>
                 <img src="https://placehold.co/1920x1080/0f172a/e0f2fe?text=EMPHZ%0AAdvanced+Composites" alt="Advanced Composite Manufacturing Facility" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"/>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight tracking-tighter transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Engineering the Future of Composites
                    </h1>
                    <p className={`text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto transition-opacity duration-1000 ease-out delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                        We deliver high-performance GRP solutions, custom-engineered for the world's most demanding applications. From bespoke designs to large-scale production, we are your trusted partner in innovation.
                    </p>
                    <div className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 ease-out delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <NavLink to="/products" className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-hover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-glow font-heading">
                            Explore Our Products
                        </NavLink>
                        <NavLink to="/contact" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 font-heading">
                            Get a Custom Quote
                        </NavLink>
                    </div>
                </div>
            </section>
            
            {/* Why GRP? Section */}
            <section className="py-20 bg-background-light">
                 <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 ref={animatedRef} className="timeline-item text-4xl font-bold font-heading tracking-tight text-text-DEFAULT mb-4">The GRP Advantage: Why Composites Win</h2>
                        <p ref={animatedRef} className="timeline-item text-text-secondary" style={{transitionDelay: '150ms'}}>Our Glass Reinforced Plastic (GRP) solutions are engineered to outperform traditional materials in every critical aspect.</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div ref={animatedRef} className="timeline-item" style={{transitionDelay: '200ms'}}><InfoCard icon={<ShieldCheck size={32}/>} title="Extreme Durability">Built to last. Our GRP solutions are impervious to corrosion, UV radiation, and extreme temperatures, ensuring decades of maintenance-free operation.</InfoCard></div>
                        <div ref={animatedRef} className="timeline-item" style={{transitionDelay: '300ms'}}><InfoCard icon={<Zap size={32}/>} title="Uncompromised Safety">Inherently non-conductive and fire-retardant, our products provide the highest level of protection for critical equipment and personnel in hazardous environments.</InfoCard></div>
                        <div ref={animatedRef} className="timeline-item" style={{transitionDelay: '400ms'}}><InfoCard icon={<Layers size={32}/>} title="Superior Strength, Less Weight">Achieve the strength of steel at a fraction of the weight. This simplifies logistics, speeds up installation, and reduces structural load requirements.</InfoCard></div>
                        <div ref={animatedRef} className="timeline-item" style={{transitionDelay: '500ms'}}><InfoCard icon={<Wrench size={32}/>} title="Limitless Customization">Your vision, engineered. We specialize in custom molding and fabrication, delivering GRP products in any shape, size, or specification to meet your exact needs.</InfoCard></div>
                     </div>
                 </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 ref={animatedRef} className="timeline-item text-4xl font-bold font-heading tracking-tight text-text-DEFAULT mb-4">Core Product Platforms</h2>
                        <p ref={animatedRef} className="timeline-item text-text-secondary mb-12" style={{transitionDelay: '150ms'}}>Explore our range of engineered GRP solutions, designed for performance and reliability across critical industries.</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {loading ? (
                         Array.from({ length: 6 }).map((_, index) => (
                           <div key={index} className="bg-white rounded-lg border border-border animate-pulse h-[450px]"></div>
                         ))
                       ) : (
                         featuredProducts.map((product, index) => (
                           <div ref={animatedRef} className="timeline-item" style={{transitionDelay: `${200 + index * 100}ms`}} key={product.id}>
                                <ProductCard product={product} />
                           </div>
                         ))
                       )}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6">
                     <h2 ref={animatedRef} className="timeline-item text-4xl font-bold font-heading tracking-tight text-center mb-16">Our Custom Manufacturing Process</h2>
                     <div ref={animatedRef} className="timeline-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12" style={{transitionDelay: '200ms'}}>
                        <div className="text-center">
                            <Wrench size={40} className="mx-auto mb-4 text-accent"/>
                            <h3 className="font-bold font-heading text-xl mb-2">1. Design & Engineering</h3>
                            <p className="text-gray-300 text-sm">We collaborate closely with you to understand your unique challenges and co-create the perfect GRP product specification.</p>
                        </div>
                         <div className="text-center">
                            <Cpu size={40} className="mx-auto mb-4 text-accent"/>
                            <h3 className="font-bold font-heading text-xl mb-2">2. SMC Manufacturing</h3>
                            <p className="text-gray-300 text-sm">Our state-of-the-art facility produces high-quality GRP composite, ready to be molded to any shape or size.</p>
                        </div>
                         <div className="text-center">
                            <GitMerge size={40} className="mx-auto mb-4 text-accent"/>
                            <h3 className="font-bold font-heading text-xl mb-2">3. Precision Assembly</h3>
                            <p className="text-gray-300 text-sm">Skilled technicians assemble your custom products with meticulous attention to detail, ensuring perfect fit and function.</p>
                        </div>
                        <div className="text-center">
                            <PackageCheck size={40} className="mx-auto mb-4 text-accent"/>
                            <h3 className="font-bold font-heading text-xl mb-2">4. Quality & Delivery</h3>
                            <p className="text-gray-300 text-sm">Rigorous testing guarantees your product meets the highest standards, delivered on time, for any quantity.</p>
                        </div>
                     </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-20 bg-background-light">
                <div className="container mx-auto px-6">
                    <h2 ref={animatedRef} className="timeline-item text-4xl font-bold font-heading tracking-tight text-center text-text-DEFAULT mb-12">Powering Critical Industries</h2>
                    <div ref={animatedRef} className="timeline-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{transitionDelay: '200ms'}}>
                        <IndustryCard name="Electrical & Utilities" imageUrl="https://placehold.co/600x600/dbeafe/1e3a8a?text=Electrical%0AIsometric+Grid" />
                        <IndustryCard name="Renewable Energy" imageUrl="https://placehold.co/600x600/dcfce7/15803d?text=Renewable%0AIsometric+Wind+Farm" />
                        <IndustryCard name="Infrastructure" imageUrl="https://placehold.co/600x600/e2e8f0/334155?text=Infrastructure%0AIsometric+City" />
                        <IndustryCard name="Telecom" imageUrl="https://placehold.co/600x600/e0e7ff/4338ca?text=Telecom%0AIsometric+Tower" />
                    </div>
                </div>
            </section>
            
            {/* CEO Message */}
             <section className="bg-background">
                <div className="container mx-auto px-6 py-20 sm:py-24 text-center">
                    <div ref={animatedRef} className="timeline-item">
                        <img src="https://placehold.co/120x120/0f172a/ffffff?text=CEO" alt="Muhammed Rashik P, CEO" className="w-28 h-28 rounded-full mx-auto mb-8 border-4 border-white shadow-lg"/>
                        <blockquote className="text-2xl sm:text-3xl font-medium font-heading max-w-4xl mx-auto mb-6 leading-snug text-text-DEFAULT">
                            “We don’t just mold GRP — we mold confidence. Our mission is to engineer trust through safer, smarter, more sustainable composites.”
                        </blockquote>
                        <cite className="not-italic font-semibold text-lg text-text-secondary">Muhammed Rashik P, CEO</cite>
                    </div>
                </div>
            </section>

            {/* Latest Insights */}
            <section className="py-20 bg-background-light">
                <div className="container mx-auto px-6">
                    <h2 ref={animatedRef} className="timeline-item text-4xl font-bold font-heading tracking-tight text-center text-text-DEFAULT mb-12">From Our Engineering Desk</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
                       {loading ? (
                         Array.from({ length: 2 }).map((_, index) => (
                           <div key={index} className="bg-white rounded-lg border border-border animate-pulse h-[350px]"></div>
                         ))
                       ) : (
                         latestPosts.map((post, index) => (
                           <div ref={animatedRef} className="timeline-item" style={{transitionDelay: `${200 + index * 100}ms`}} key={post.id}>
                                <InsightCard post={post} />
                           </div>
                         ))
                       )}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-accent-secondary text-white">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h2 ref={animatedRef} className="timeline-item text-4xl font-bold font-heading tracking-tight mb-4">Have a Complex Challenge?</h2>
                    <p ref={animatedRef} className="timeline-item text-lg text-orange-100 max-w-2xl mx-auto mb-8" style={{transitionDelay: '150ms'}}>
                        We have the composite solution. Partner with us to engineer a custom GRP product that meets your performance, safety, and budgetary requirements. Let's build together.
                    </p>
                    <div ref={animatedRef} className="timeline-item flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4" style={{transitionDelay: '300ms'}}>
                        <NavLink to="/contact" className="w-full sm:w-auto bg-white text-accent-secondary px-8 py-3 rounded-lg font-bold hover:bg-orange-100 shadow-lg transition-colors duration-300 transform hover:-translate-y-1 font-heading">
                            Discuss Your Project
                        </NavLink>
                        <NavLink to="/resources" className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors duration-300 font-heading">
                           Download Company Profile
                        </NavLink>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;