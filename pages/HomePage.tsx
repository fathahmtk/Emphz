import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShieldCheck, Zap, Layers, Wrench, Cpu, GitMerge, PackageCheck, ArrowRight, Quote
} from 'lucide-react';
import { Product, BlogPost, Download, Testimonial } from '../types';
import { getFeaturedProducts, getLatestBlogPosts, getDownloads, getTestimonials } from '../services/mockApi';
import { ProductCard } from '../components/ProductCard';
import { SectionDivider } from '../components/SectionDivider';
import { useI18n } from '../hooks/useI18n';
import { usePageMetadata } from '../hooks/usePageMetadata';

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

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg border border-border shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <Quote className="w-10 h-10 text-accent mb-4" />
        <blockquote className="text-text-secondary italic mb-6 flex-grow">
            “{testimonial.quote}”
        </blockquote>
        <div className="flex items-center mt-auto">
            <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-14 h-14 rounded-full me-4 border-2 border-accent" />
            <div>
                <p className="font-bold font-heading text-text-DEFAULT">{testimonial.name}</p>
                <p className="text-sm text-text-secondary">{testimonial.company}</p>
            </div>
        </div>
    </div>
);

const InsightCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const { t } = useI18n();
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

const heroImages = [
    { url: 'https://dl.dropboxusercontent.com/scl/fi/p9nv1veh2fxa52ymwtghl/Emphz-GRP-Hero-Image-1.png?rlkey=dxhpiufpindtycgfv0ch48w48&dl=0', alt: 'EMPHZ GRP Electrical Enclosures' },
    { url: 'https://dl.dropboxusercontent.com/scl/fi/i3jblkxsh97yoq6b61i1k/Emphz-GRP-Hero-Image-2.png?rlkey=wudzy7fl1pquzayw3yd2865mt&dl=0', alt: 'EMPHZ GRP Modular Cabins' },
    { url: 'https://dl.dropboxusercontent.com/scl/fi/i0r4s035cvcc8v8ykg9ba/Emphz-GRP-Hero-Image-3.png?rlkey=obfwaz3804vodjbnk2rpgmdj9&dl=0', alt: 'EMPHZ GRP Industrial Solutions' },
];

const HomePage: React.FC = () => {
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [companyProfileUrl, setCompanyProfileUrl] = useState<string>('#');
    const [loading, setLoading] = useState(true);
    const animatedRef = useScrollAnimation();
    const { t } = useI18n();
    const [currentSlide, setCurrentSlide] = useState(0);

    usePageMetadata(
        "EMPHZ Global | The GRP Company – Enclosures, Kiosks & Composite Solutions",
        "When it’s GRP, it’s EMPHZ. EMPHZ Global is India’s leading manufacturer of high-performance Glass Reinforced Plastic (GRP) enclosures, kiosks, and modular cabins — engineered for durability, safety, and sustainability across global industries.",
        "EMPHZ GRP, The GRP Company, GRP enclosures, GRP kiosks, GRP cabins, GRP manufacturer India, composite solutions, Glass Reinforced Plastic, EMPHZ Global"
    );
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearTimeout(timer);
    }, [currentSlide]);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [products, posts, downloads, testimonialsData] = await Promise.all([
                getFeaturedProducts(),
                getLatestBlogPosts(2),
                getDownloads(),
                getTestimonials()
            ]);
            setFeaturedProducts(products);
            setLatestPosts(posts);
            setTestimonials(testimonialsData);

            const profile = downloads.find(d => d.category === 'Company Profile');
            if (profile) {
                setCompanyProfileUrl(profile.fileUrl);
            }

            setLoading(false);
        };
        fetchData();
        
    }, []);

    return (
        <div className="bg-background overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-primary-dark text-white py-20 md:py-32 overflow-hidden">
                {/* Background Images Slider */}
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        aria-hidden={index !== currentSlide}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-black opacity-80"></div>
                        <img 
                            src={image.url} 
                            alt={image.alt} 
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                        />
                    </div>
                ))}

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 ref={animatedRef} className="timeline-item text-4xl sm:text-5xl md:text-7xl font-extrabold font-heading mb-6 leading-tight tracking-tighter">
                        {t('home.hero.title')}
                    </h1>
                    <p ref={animatedRef} className="timeline-item text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto" style={{transitionDelay: '150ms'}}>
                        {t('home.hero.subtitle')}
                    </p>
                    <div ref={animatedRef} className="timeline-item flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4" style={{transitionDelay: '300ms'}}>
                        <NavLink to="/products" className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-hover shadow-lg transition-all duration-300 transform hover:-translate-y-1 cta-glow font-heading">
                            {t('home.hero.exploreProducts')}
                        </NavLink>
                        <NavLink to="/contact" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 font-heading">
                            {t('home.hero.getQuote')}
                        </NavLink>
                    </div>
                </div>

                 {/* Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
            
            {/* Why GRP? Section */}
            <section className="py-20 bg-background-light">
                 <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 ref={animatedRef} className="timeline-item text-4xl font-extrabold font-heading tracking-tight text-text-DEFAULT mb-4">{t('home.advantage.title')}</h2>
                        <p ref={animatedRef} className="timeline-item text-text-secondary" style={{transitionDelay: '150ms'}}>{t('home.advantage.subtitle')}</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div ref={animatedRef} className="timeline-item" style={{transitionDelay: '200ms'}}><InfoCard icon={<ShieldCheck size={32}/>} title={t('home.advantage.card1Title')}>{t('home.advantage.card1Text')}</InfoCard></div>
                        <div ref={animatedRef} className="timeline-item" style={{transitionDelay: '300ms'}}><InfoCard icon={<Zap size={32}/>} title={t('home.advantage.card2Title')}>{t('home.advantage.card2Text')}</InfoCard></div>
                        <div ref={animatedRef} className="timeline-item" style={{transitionDelay: '400ms'}}><InfoCard icon={<Layers size={32}/>} title={t('home.advantage.card3Title')}>{t('home.advantage.card3Text')}</InfoCard></div>
                        <div ref={animatedRef} className="timeline-item" style={{transitionDelay: '500ms'}}><InfoCard icon={<Wrench size={32}/>} title={t('home.advantage.card4Title')}>{t('home.advantage.card4Text')}</InfoCard></div>
                     </div>
                 </div>
            </section>
            
            <SectionDivider />

            {/* Featured Products */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 ref={animatedRef} className="timeline-item text-4xl font-extrabold font-heading tracking-tight text-text-DEFAULT mb-4">{t('home.featuredProducts.title')}</h2>
                        <p ref={animatedRef} className="timeline-item text-text-secondary mb-12" style={{transitionDelay: '150ms'}}>{t('home.featuredProducts.subtitle')}</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {loading ? (
                         Array.from({ length: 3 }).map((_, index) => (
                           <div key={index} className="bg-white rounded-lg border border-border animate-pulse h-[450px]"></div>
                         ))
                       ) : (
                         featuredProducts.map((product, index) => (
                           <div ref={animatedRef} className="timeline-item" style={{transitionDelay: `${200 + index * 100}ms`}} key={product.id}>
                                {/* FIX: Pass dummy props for comparison feature which is not used on the homepage. */}
                                <ProductCard product={product} isSelectedForCompare={false} onToggleCompare={() => {}} />
                           </div>
                         ))
                       )}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 bg-primary text-white pattern-bg">
                <div className="container mx-auto px-6">
                     <h2 ref={animatedRef} className="timeline-item text-4xl font-extrabold font-heading tracking-tight text-center mb-16">{t('home.process.title')}</h2>
                     <div ref={animatedRef} className="timeline-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12" style={{transitionDelay: '200ms'}}>
                        <div className="text-center">
                            <Wrench size={40} className="mx-auto mb-4 text-accent"/>
                            <h3 className="font-bold font-heading text-xl mb-2">{t('home.process.step1Title')}</h3>
                            <p className="text-gray-300 text-sm">{t('home.process.step1Text')}</p>
                        </div>
                         <div className="text-center">
                            <Cpu size={40} className="mx-auto mb-4 text-accent"/>
                            <h3 className="font-bold font-heading text-xl mb-2">{t('home.process.step2Title')}</h3>
                            <p className="text-gray-300 text-sm">{t('home.process.step2Text')}</p>
                        </div>
                         <div className="text-center">
                            <GitMerge size={40} className="mx-auto mb-4 text-accent"/>
                            <h3 className="font-bold font-heading text-xl mb-2">{t('home.process.step3Title')}</h3>
                            <p className="text-gray-300 text-sm">{t('home.process.step3Text')}</p>
                        </div>
                        <div className="text-center">
                            <PackageCheck size={40} className="mx-auto mb-4 text-accent"/>
                            <h3 className="font-bold font-heading text-xl mb-2">{t('home.process.step4Title')}</h3>
                            <p className="text-gray-300 text-sm">{t('home.process.step4Text')}</p>
                        </div>
                     </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-20 bg-background-light">
                <div className="container mx-auto px-6">
                    <h2 ref={animatedRef} className="timeline-item text-4xl font-extrabold font-heading tracking-tight text-center text-text-DEFAULT mb-12">{t('home.industries.title')}</h2>
                    <div ref={animatedRef} className="timeline-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{transitionDelay: '200ms'}}>
                        <IndustryCard name={t('home.industries.industry1')} imageUrl="https://images.unsplash.com/photo-1497435334365-652a65ce52ce?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=crop" />
                        <IndustryCard name={t('home.industries.industry2')} imageUrl="https://images.unsplash.com/photo-1508514177221-188b2cf16e9d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=crop" />
                        <IndustryCard name={t('home.industries.industry3')} imageUrl="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=crop" />
                        <IndustryCard name={t('home.industries.industry4')} imageUrl="https://images.unsplash.com/photo-1512581634283-164783a01344?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=crop" />
                    </div>
                </div>
            </section>
            
            <SectionDivider />

            {/* CEO Message */}
             <section className="bg-background">
                <div className="container mx-auto px-6 py-20 sm:py-24 text-center">
                    <div ref={animatedRef} className="timeline-item">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=120&h=120&fit=crop" alt="Muhammed Rashik P, CEO" className="w-28 h-28 rounded-full mx-auto mb-8 border-4 border-white shadow-lg"/>
                        <blockquote className="text-2xl sm:text-3xl font-medium font-heading max-w-4xl mx-auto mb-6 leading-snug text-text-DEFAULT">
                            {t('home.ceo.quote')}
                        </blockquote>
                        <cite className="not-italic font-semibold text-lg text-text-secondary">{t('home.ceo.name')}</cite>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Testimonials Section */}
            <section className="py-20 bg-background-light">
                <div className="container mx-auto px-6">
                    <h2 ref={animatedRef} className="timeline-item text-4xl font-extrabold font-heading tracking-tight text-center text-text-DEFAULT mb-12">{t('home.testimonials.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {loading ? (
                         Array.from({ length: 3 }).map((_, index) => (
                           <div key={index} className="bg-white rounded-lg border border-border animate-pulse h-[350px]"></div>
                         ))
                       ) : (
                         testimonials.map((testimonial, index) => (
                           <div ref={animatedRef} className="timeline-item" style={{transitionDelay: `${200 + index * 100}ms`}} key={testimonial.id}>
                                <TestimonialCard testimonial={testimonial} />
                           </div>
                         ))
                       )}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Latest Insights */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <h2 ref={animatedRef} className="timeline-item text-4xl font-extrabold font-heading tracking-tight text-center text-text-DEFAULT mb-12">{t('home.insights.title')}</h2>
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
            <section className="bg-primary text-white pattern-bg">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h2 ref={animatedRef} className="timeline-item text-4xl font-extrabold font-heading tracking-tight mb-4">{t('home.cta.title')}</h2>
                    <p ref={animatedRef} className="timeline-item text-lg text-gray-200 max-w-2xl mx-auto mb-8" style={{transitionDelay: '150ms'}}>
                        {t('home.cta.subtitle')}
                    </p>
                    <div ref={animatedRef} className="timeline-item flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4" style={{transitionDelay: '300ms'}}>
                        <NavLink to="/contact" className="w-full sm:w-auto bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-accent-hover shadow-lg transition-colors duration-300 transform hover:-translate-y-1 font-heading">
                            {t('home.cta.discussProject')}
                        </NavLink>
                        <a href={companyProfileUrl} download className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors duration-300 font-heading">
                           {t('home.cta.downloadProfile')}
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;