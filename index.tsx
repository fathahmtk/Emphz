/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPES ---
type ProductItem = {
    title: string;
    description: string;
    image_front: string;
    image_side: string;
    material: string;
    ipRating: string;
};

type BlogItem = {
    image: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    content: string;
};

type FormData = {
    name: string;
    email: string;
    company: string;
    inquiryType: string;
    message: string;
};

type FormErrors = {
    [key in keyof FormData]?: string;
};

// --- DATA ---

const navLinks = [
    { title: 'Home', id: 'home' },
    { title: 'About Us', id: 'about' },
    { title: 'Products', id: 'products' },
    { title: 'Quality', id: 'quality' },
    { title: 'Portfolio', id: 'portfolio' },
    { title: 'Testimonials', id: 'testimonials' },
    { title: 'Contact', id: 'contact' },
];

const whyChooseUsData = [
    {
        lottieSrc: "https://lottie.host/9c33959c-8e8e-4f2a-b1e8-71e98a3c1f0d/wDBxIe2F4i.json",
        title: "Bespoke Engineering",
        description: "We don't just sell boxes; we engineer solutions. Our team works with you to design and manufacture GRP enclosures to your exact dimensional and functional specifications."
    },
    {
        lottieSrc: "https://lottie.host/80e7bb52-16a7-4786-9a2d-209a318d19e6/L8sXjR72wE.json",
        title: "Advanced Composites",
        description: "Utilizing superior-grade Glass Reinforced Plastic, our products offer exceptional durability, corrosion resistance, and thermal insulation for any environment."
    },
    {
        lottieSrc: "https://lottie.host/02a5a544-7f61-4a58-86d7-31a89c93f0b2/90H5C3R9jI.json",
        title: "Certified Durability",
        description: "Every product is rigorously tested to meet and exceed international standards, ensuring your critical components are protected, always."
    }
];

const clientLogosData = [
    { name: "Axiom Dynamics", logo: "https://storage.googleapis.com/maker-studio-project-assets/client-logos/axiom-logo-white.svg" },
    { name: "Cygnus Energy", logo: "https://storage.googleapis.com/maker-studio-project-assets/client-logos/cygnus-logo-white.svg" },
    { name: "Helios Infra", logo: "https://storage.googleapis.com/maker-studio-project-assets/client-logos/helios-logo-white.svg" },
    { name: "Orion Industries", logo: "https://storage.googleapis.com/maker-studio-project-assets/client-logos/orion-logo-white.svg" },
    { name: "Quantum Core", logo: "https://storage.googleapis.com/maker-studio-project-assets/client-logos/quantum-logo-white.svg" },
    { name: "StellarBuild", logo: "https://storage.googleapis.com/maker-studio-project-assets/client-logos/stellar-logo-white.svg" },
];

const productPortfolio = [
    {
        category: "Wall-Mounted Enclosures",
        items: [
            {
                title: "Compact WM Series",
                description: "Ideal for housing terminals and electronic components. Fully customizable with cutouts, windows, and mounting plates.",
                image_front: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-1-front.png",
                image_side: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-1-side.png",
                material: "GRP",
                ipRating: "IP66"
            },
            {
                title: "Modular WM-M Series",
                description: "Interlocking modular enclosures for scalable solutions. Perfect for control stations and multi-part systems.",
                image_front: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-2-front.png",
                image_side: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-2-side.png",
                material: "GRP",
                ipRating: "IP65"
            },
            {
                title: "Vented WM-V Series",
                description: "Designed for components requiring heat dissipation, with custom vent patterns and weather-proof cowls.",
                image_front: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-3-front.png",
                image_side: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-3-side.png",
                material: "Polycarbonate",
                ipRating: "IP54"
            },
        ]
    },
    {
        category: "Free-Standing Cabinets",
        items: [
            {
                title: "FS-Single Door Cabinet",
                description: "Robust single-door cabinets for larger control systems, with options for 19-inch rack mounting and climate control.",
                image_front: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-4-front.png",
                image_side: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-4-side.png",
                material: "GRP",
                ipRating: "IP65"
            },
            {
                title: "FS-Double Door Cabinet",
                description: "Spacious and accessible double-door designs for extensive electrical switchgear and distribution panels.",
                image_front: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-5-front.png",
                image_side: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-5-side.png",
                material: "GRP",
                ipRating: "IP66"
            },
        ]
    },
    {
        category: "Custom Junction & Terminal Boxes",
        items: [
            {
                title: "Bespoke Junction Boxes",
                description: "Engineered to your precise size, IP rating, and terminal configuration requirements for any application.",
                image_front: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-6-front.png",
                image_side: "https://storage.googleapis.com/maker-studio-project-assets/grp-renders/grp-render-6-side.png",
                material: "Polycarbonate",
                ipRating: "IP67"
            },
        ]
    },
];

const qualityData = [
  { 
    title: "IEC 62208 & 61439 Compliance",
    description: "Our enclosures are designed and tested to meet the highest international standards for safety, performance, and reliability.",
    lottieSrc: "https://lottie.host/2e230485-9856-42d1-949f-431818276f7c/1gbl9jDkG0.json"
  },
  { 
    title: "ISO 9001:2015 Certified",
    description: "Our quality management system ensures consistency and excellence from raw material sourcing to final product delivery.",
    lottieSrc: "https://lottie.host/2860b099-b1d5-45a7-9382-7f8e81e3d304/WJ8W8x8q6D.json"
  },
  { 
    title: "IP65+ Protection as Standard",
    description: "We guarantee superior protection against dust and water ingress, ensuring the safety of your internal components in harsh conditions.",
    lottieSrc: "https://lottie.host/9f5064c1-9877-4f6c-b3b4-f37b6058097d/t1o0g1ZqB3.json"
  },
  {
    title: "IK10 Impact Resistance",
    description: "Our GRP material composition is optimized for high impact resistance, providing robust physical protection for your equipment.",
    lottieSrc: "https://lottie.host/5a77085c-15b5-4122-8356-fd3f7e5bf4e3/N2tDbzC8S2.json"
  }
];

const testimonialsData = [
    {
        quote: "EMPHZ delivered a fully customized GRP cabinet solution for our water treatment facility ahead of schedule. The quality and attention to detail were exceptional. They are our go-to partner for enclosures.",
        name: "Fahad Al-Mansoori",
        title: "Lead Engineer, Helios Infra"
    },
    {
        quote: "The ability to specify exact dimensions and internal mounting points saved us countless hours of on-site modifications. The EMPHZ team understood our needs perfectly.",
        name: "Jia Li",
        title: "Director of Operations, Cygnus Energy"
    },
    {
        quote: "We needed a durable, non-corrosive housing for our remote monitoring sensors in a harsh industrial environment. EMPHZ's GRP boxes have performed flawlessly. Truly a fit-and-forget solution.",
        name: "Kenji Tanaka",
        title: "Chief Engineer, Orion Industries"
    }
];

const galleryData = [
    {
        src: "https://storage.googleapis.com/maker-studio-project-assets/general-assets/portfolio-control-panel.jpg",
        title: "High-Tech Industrial Control Panel",
    },
    {
        src: "https://storage.googleapis.com/maker-studio-project-assets/general-assets/portfolio-server-room.jpg",
        title: "Secure Enclosures in a Data Center",
    },
    {
        src: "https://storage.googleapis.com/maker-studio-project-assets/general-assets/portfolio-solar-panels.jpg",
        title: "Weatherproof Housing for Renewable Energy Systems",
    },
    {
        src: "https://storage.googleapis.com/maker-studio-project-assets/general-assets/portfolio-industrial-machinery.jpg",
        title: "Integrated Control Box on a Manufacturing Line",
    },
    {
        src: "https://storage.googleapis.com/maker-studio-project-assets/general-assets/portfolio-substation.jpg",
        title: "GRP Cabinets at an Electrical Substation",
    },
    {
        src: "https://storage.googleapis.com/maker-studio-project-assets/general-assets/portfolio-utility-box.jpg",
        title: "Durable Outdoor Telecommunications Enclosure",
    }
];

const LogoSvg = () => (
    <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 25 L45 25 L50 35 L75 35 L80 25 L90 25 L80 75 L65 75 L60 60 L40 60 L35 75 L20 75 Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
        <path d="M50 45 L50 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    </svg>
);


// --- HOOKS ---
const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isIntersecting] as const;
};


const useModalManager = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(-1);
    const prevLightboxItem = () => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryData.length - 1));
    const nextLightboxItem = () => setLightboxIndex((prev) => (prev < galleryData.length - 1 ? prev + 1 : 0));
    
    const openProductModal = (product: ProductItem) => setSelectedProduct(product);
    const closeProductModal = () => setSelectedProduct(null);

    const isModalOpen = lightboxIndex !== -1 || !!selectedProduct;

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    }, [isModalOpen]);

    return {
        lightboxIndex, openLightbox, closeLightbox, prevLightboxItem, nextLightboxItem,
        selectedProduct, openProductModal, closeProductModal,
        isModalOpen
    };
};

// --- UTILITY & GENERIC COMPONENTS ---
// Add this to the global scope for the lottie-player web component
// FIX: Corrected the TypeScript type definition for the 'lottie-player' web component to resolve JSX intrinsic element errors.
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                src: string;
                background?: string;
                speed?: string | number;
                loop?: boolean | number;
                autoplay?: boolean;
            }, HTMLElement>;
        }
    }
}

const LottieIcon: React.FC<{ src: string }> = ({ src }) => {
    const lottiePlayerRef = useRef<HTMLElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const player = lottiePlayerRef.current;
        
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (player) {
            // The 'load' event fires when the animation is loaded and ready to play.
            player.addEventListener('load', handleLoad);
        }

        return () => {
            if (player) {
                player.removeEventListener('load', handleLoad);
            }
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="lottie-container">
            {isLoading && <div className="lottie-loader"></div>}
            <lottie-player
                ref={lottiePlayerRef}
                src={src}
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{ visibility: isLoading ? 'hidden' : 'visible' }}
            ></lottie-player>
        </div>
    );
};


const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
};

const ImageWithPlaceholder: React.FC<{
    src: string;
    alt: string;
    className?: string;
    loading?: 'lazy' | 'eager';
}> = ({ src, alt, className, loading = 'lazy' }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Reset loading state when image source changes.
    // This is crucial for components where the image src is dynamic,
    // like the product cards that change image on hover.
    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
    }, [src]);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    const placeholderUrl = `https://via.placeholder.com/800x600.png?text=${encodeURIComponent(alt)}`;

    return (
        <div className={`image-placeholder-wrapper ${className || ''}`}>
            {isLoading && <div className="skeleton-loader"></div>}
            <img
                src={hasError ? placeholderUrl : src}
                alt={alt}
                loading={loading}
                onLoad={handleLoad}
                onError={handleError}
                style={{ opacity: isLoading ? 0 : 1 }}
            />
        </div>
    );
};

const SectionHeader: React.FC<{ title: string; subtitle: string; }> = ({ title, subtitle }) => (
    <>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
    </>
);


// --- LAYOUT COMPONENTS ---
interface AnimatedSectionProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <section id={id} className={className} ref={ref}>
            <div className={`section-content ${isVisible ? 'is-visible' : ''}`}>
                {children}
            </div>
        </section>
    );
};

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setMenuOpen(false);
        scrollToSection(id);
    };
    
    return (
        <header className={`app-header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="container">
                <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
                    <LogoSvg />
                    <span>EMPHZ</span>
                </a>
                <nav className="main-nav">
                    {navLinks.map(link => (
                        <a key={link.id} href={`#${link.id}`} onClick={(e) => handleLinkClick(e, link.id)}>{link.title}</a>
                    ))}
                </nav>
                 <a href="#contact" className="cta-button header-cta" onClick={(e) => handleLinkClick(e, 'contact')}>Get a Quote</a>
                <button className="mobile-nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
                    <svg className="icon-menu" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <svg className="icon-close" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </header>
    );
};

const Footer = () => (
    <footer className="app-footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-brand">
                    <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                        <LogoSvg />
                        <span>EMPHZ</span>
                    </a>
                    <p>Precision GRP Enclosures, Engineered to Your Exact Specifications.</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <nav>
                        {navLinks.filter(l => l.id !== 'home').map(link => (
                            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}>{link.title}</a>
                        ))}
                    </nav>
                </div>
                <div className="footer-social">
                    <h4>Connect With Us</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>&copy; {new Date().getFullYear()} EMPHZ Private Limited. All Rights Reserved.</span>
            </div>
        </div>
    </footer>
);

// --- MODAL & OVERLAY COMPONENTS ---
const Lightbox: React.FC<{
    images: typeof galleryData,
    currentIndex: number,
    onClose: () => void,
    onPrev: () => void,
    onNext: () => void,
}> = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onPrev, onNext]);

    if (currentIndex < 0) return null;
    const currentImage = images[currentIndex];

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="lightbox-close" onClick={onClose} aria-label="Close image viewer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <button className="lightbox-nav prev" onClick={onPrev} aria-label="Previous image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <figure>
                     <ImageWithPlaceholder
                        src={currentImage.src}
                        alt={currentImage.title}
                        loading="eager"
                     />
                    <figcaption>{currentImage.title}</figcaption>
                </figure>
                <button className="lightbox-nav next" onClick={onNext} aria-label="Next image">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </div>
    );
};

const ProductModal: React.FC<{
    product: ProductItem | null;
    onClose: () => void;
}> = ({ product, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content product-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close product details">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <ImageWithPlaceholder src={product.image_front} alt={product.title} className="product-modal-image" loading="eager" />
                <div className="product-modal-text">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div className="product-modal-specs">
                        <span><strong>Material:</strong> {product.material}</span>
                        <span><strong>IP Rating:</strong> {product.ipRating}</span>
                    </div>
                    <p>All our products are fully customizable. We can modify dimensions, add cutouts for cable glands and controls, include viewing windows, and integrate mounting plates or DIN rails to meet your project's specific needs.</p>
                    <a href="#contact" className="cta-button" onClick={onClose}>Request a Quote</a>
                </div>
            </div>
        </div>
    );
};


const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        
        window.addEventListener('scroll', toggleVisibility);
        
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <button 
            className={`back-to-top-button ${isVisible ? 'show' : ''}`} 
            onClick={scrollToTop}
            aria-label="Go to top of page"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
        </button>
    );
};

// --- SECTION COMPONENTS ---
const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-video-wrapper">
                <video
                    src="https://storage.googleapis.com/maker-studio-project-assets/general-assets/industrial-video-bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                ></video>
            </div>
            <div className="hero-overlay"></div>
            <div className="container">
                <h1>Precision GRP Enclosures,<br />Engineered for Excellence.</h1>
                <p className="subtitle">EMPHZ Private Limited is a leading manufacturer of high-performance, custom GRP enclosures and electrical solutions for demanding industrial environments.</p>
                <div className="hero-buttons">
                    <a href="#products" className="cta-button">Explore Products</a>
                    <a href="#contact" className="cta-button secondary">Request Consultation</a>
                </div>
            </div>
        </section>
    );
};

const About = () => (
    <AnimatedSection id="about" className="section">
        <div className="container">
            <div className="about-content">
                <div className="about-image">
                    <ImageWithPlaceholder 
                        src="https://storage.googleapis.com/maker-studio-project-assets/general-assets/engineers-collaborating.jpg" 
                        alt="Engineers collaborating on industrial plans"
                        loading="eager"
                    />
                </div>
                 <div className="about-text">
                    <SectionHeader 
                        title="About EMPHZ Private Limited"
                        subtitle="Your Partner in Custom Protection"
                    />
                    <p>At EMPHZ, we specialize in the design and manufacture of custom Glass Reinforced Plastic (GRP) enclosures. Our mission is to provide robust, reliable, and perfectly tailored solutions that protect our clients' critical electrical and electronic components in any environment.</p>
                    <p>With a state-of-the-art manufacturing facility and a dedicated team of engineers, we combine advanced material science with precision craftsmanship. From initial concept and 3D modeling to final production, we are committed to delivering unparalleled quality and service.</p>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const WhyChooseUs = () => (
    <AnimatedSection id="why-choose-us" className="section section-alt">
        <div className="container">
            <SectionHeader 
                title="The EMPHZ Difference"
                subtitle="The core pillars that define our commitment to excellence."
            />
            <div className="why-choose-us-grid">
                {whyChooseUsData.map((item, index) => (
                    <div className="why-choose-us-card stagger-item" key={item.title} style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="why-choose-us-icon">
                            <LottieIcon src={item.lottieSrc} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Clients = () => (
    <AnimatedSection id="clients" className="section">
        <div className="container">
            <SectionHeader 
                title="Trusted By Industry Leaders"
                subtitle="We are the preferred manufacturing partner for companies that demand reliability."
            />
            <div className="client-logos">
                {clientLogosData.map(client => (
                    <div className="client-logo" key={client.name}>
                        <ImageWithPlaceholder src={client.logo} alt={client.name} />
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

type Filters = {
    category: string;
    materials: string[];
    ipRatings: string[];
};

const Products: React.FC<{
    onProductClick: (product: ProductItem) => void;
    filters: Filters;
    onFilterChange: (newFilters: Partial<Filters>) => void;
}> = ({ onProductClick, filters, onFilterChange }) => {
    const [isHovered, setIsHovered] = useState<string | null>(null);

    const categories = useMemo(() => ['All', ...[...new Set(productPortfolio.map(p => p.category))]], []);
    const allMaterials = useMemo(() => [...new Set(productPortfolio.flatMap(p => p.items.map(i => i.material)))].sort(), []);
    const allIpRatings = useMemo(() => [...new Set(productPortfolio.flatMap(p => p.items.map(i => i.ipRating)))].sort(), []);

    const handleCategoryChange = (category: string) => {
        onFilterChange({ category });
    };

    const handleCheckboxChange = (
        filterType: 'materials' | 'ipRatings',
        value: string,
        isChecked: boolean
    ) => {
        const currentValues = filters[filterType];
        const newValues = isChecked
            ? [...currentValues, value]
            : currentValues.filter(v => v !== value);
        onFilterChange({ [filterType]: newValues });
    };
    
    const clearAdvancedFilters = () => {
        onFilterChange({ materials: [], ipRatings: [] });
    };

    const areAdvancedFiltersActive = filters.materials.length > 0 || filters.ipRatings.length > 0;

    const filteredPortfolio = useMemo(() => {
        return productPortfolio
            .map(category => ({
                ...category,
                items: category.items.filter(item => {
                    const materialMatch = filters.materials.length === 0 || filters.materials.includes(item.material);
                    const ipRatingMatch = filters.ipRatings.length === 0 || filters.ipRatings.includes(item.ipRating);
                    return materialMatch && ipRatingMatch;
                })
            }))
            .filter(category => {
                const categoryMatch = filters.category === 'All' || category.category === filters.category;
                return categoryMatch && category.items.length > 0;
            });
    }, [filters]);

    return (
        <AnimatedSection id="products" className="section section-alt">
            <div className="container">
                <SectionHeader
                    title="Our Product Lines"
                    subtitle="Standard designs, fully customizable to your needs."
                />
                <div className="product-filters-container">
                    <div className="product-filters">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-button ${filters.category === category ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="advanced-filters">
                        <div className="filter-group">
                            <h4>Material Type</h4>
                            <div className="filter-options">
                                {allMaterials.map(material => (
                                    <label key={material} className="filter-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={filters.materials.includes(material)}
                                            onChange={(e) => handleCheckboxChange('materials', material, e.target.checked)}
                                        />
                                        <span>{material}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="filter-group">
                            <h4>IP Rating</h4>
                            <div className="filter-options">
                                {allIpRatings.map(rating => (
                                    <label key={rating} className="filter-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={filters.ipRatings.includes(rating)}
                                            onChange={(e) => handleCheckboxChange('ipRatings', rating, e.target.checked)}
                                        />
                                        <span>{rating}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        {areAdvancedFiltersActive && (
                            <button onClick={clearAdvancedFilters} className="clear-filters-btn">
                                Clear Filters
                            </button>
                        )}
                    </div>
                </div>

                {filteredPortfolio.length > 0 ? (
                    filteredPortfolio.map(category => (
                        <div key={category.category} className="product-category">
                            <h3>{category.category}</h3>
                            <div className="product-grid">
                                {category.items.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className="product-card stagger-item"
                                        tabIndex={0}
                                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onProductClick(item)}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        onMouseEnter={() => setIsHovered(item.title)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        <div className="product-card-image" onClick={() => onProductClick(item)}>
                                            <ImageWithPlaceholder
                                                src={isHovered === item.title ? item.image_side : item.image_front}
                                                alt={item.title}
                                                className="product-3d-image"
                                            />
                                            <div className="product-card-overlay">
                                                <button className="quick-view-btn" onClick={(e) => { e.stopPropagation(); onProductClick(item); }}>
                                                    Quick View
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-card-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                            <button className="product-card-link" onClick={() => onProductClick(item)}>View Details &rarr;</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-products-found">
                        <h3>No Products Found</h3>
                        <p>Try adjusting your filter criteria or clearing the filters.</p>
                    </div>
                )}
            </div>
        </AnimatedSection>
    );
};

const Quality = () => (
  <AnimatedSection id="quality" className="section">
    <div className="container">
      <SectionHeader
        title="An Uncompromising Commitment to Quality"
        subtitle="Our dedication to excellence is embedded in every component, process, and system we deliver."
      />
      <div className="quality-grid">
        {qualityData.map((item, index) => (
          <div className="quality-card stagger-item" key={item.title} style={{ animationDelay: `${index * 100}ms` }}>
            <div className="quality-icon">
                <LottieIcon src={item.lottieSrc} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Portfolio: React.FC<{ onImageClick: (index: number) => void }> = ({ onImageClick }) => (
    <AnimatedSection id="portfolio" className="section section-alt">
        <div className="container">
            <SectionHeader 
                title="Custom Solutions Portfolio"
                subtitle="Explore our portfolio of bespoke GRP enclosures engineered for specific client applications."
            />
            <div className="gallery-grid">
                {galleryData.map((item, index) => (
                    <div 
                        key={index} 
                        className="gallery-item stagger-item"
                        onClick={() => onImageClick(index)}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onImageClick(index)}
                        tabIndex={0}
                        role="button"
                        aria-label={`View image: ${item.title}`}
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <ImageWithPlaceholder src={item.src} alt={item.title} />
                        <div className="gallery-item-overlay">
                           <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    return (
        <AnimatedSection id="testimonials" className="section">
            <div className="container">
                <SectionHeader 
                    title="What Our Partners Say"
                    subtitle="Building lasting relationships through quality, reliability, and service."
                />
                <div className="testimonial-slider">
                    <div className="testimonial-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialsData.map(testimonial => (
                            <div className="testimonial-slide" key={testimonial.name}>
                                <div className="testimonial-card">
                                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                                    <div className="testimonial-author">
                                        <span className="author-name">{testimonial.name}</span>
                                        <span className="author-title">{testimonial.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevSlide} className="slider-nav prev" aria-label="Previous testimonial">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button onClick={nextSlide} className="slider-nav next" aria-label="Next testimonial">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                    <div className="slider-dots">
                        {testimonialsData.map((_, index) => (
                            <button 
                                key={index} 
                                className={`dot ${currentIndex === index ? 'active' : ''}`} 
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                           />
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};


const Contact = () => {
    const initialFormData: FormData = {
        name: '',
        email: '',
        company: '',
        inquiryType: 'Request for Quote',
        message: '',
    };
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
    
    const validate = (data: FormData): FormErrors => {
        const errors: FormErrors = {};
        if (!data.name.trim()) errors.name = 'Full Name is required.';
        if (!data.email) {
            errors.email = 'Email Address is required.';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email address is invalid.';
        }
        if (!data.message.trim()) errors.message = 'Project Details are required.';
        else if(data.message.trim().length < 10) errors.message = 'Please provide more details (min 10 characters).';
        
        return errors;
    };

    useEffect(() => {
        const validationErrors = validate(formData);
        setErrors(validationErrors);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({
            name: true, email: true, company: true, message: true
        });

        const validationErrors = validate(formData);
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length > 0) return;

        setStatus('submitting');
        console.log('Form Data Submitted:', formData);
        
        // Simulate API call
        setTimeout(() => {
            // Simulate a random success/error for demonstration
            if (Math.random() > 0.1) { // 90% chance of success
                setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500);
    };
    
    const handleReset = () => {
        setFormData(initialFormData);
        setTouched({});
        setErrors({});
        setStatus('idle');
    }

    return (
        <AnimatedSection id="contact" className="section section-alt">
            <div className="container">
                <SectionHeader 
                    title="Request a Custom Quote"
                    subtitle="Let's build your perfect enclosure. Tell us about your project, and our engineers will get back to you shortly."
                />
                <div className="contact-wrapper">
                    <div className="contact-form-container">
                        {status === 'success' ? (
                            <div className="form-feedback success">
                               <h3>Thank you!</h3>
                               <p>Your request has been submitted successfully. Our team will review the details and get back to you within 24-48 hours.</p>
                               <button onClick={handleReset} className="cta-button">Submit Another Inquiry</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} required />
                                        {touched.name && errors.name && <p className="form-error">{errors.name}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required />
                                        {touched.email && errors.email && <p className="form-error">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="company">Company Name</label>
                                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inquiryType">Nature of Inquiry</label>
                                        <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
                                            <option>Request for Quote</option>
                                            <option>Technical Question</option>
                                            <option>Partnership Inquiry</option>
                                            <option>General Information</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Project Details / Message *</label>
                                    <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} onBlur={handleBlur} required></textarea>
                                    {touched.message && errors.message && <p className="form-error">{errors.message}</p>}
                                </div>
                                <button type="submit" className="cta-button" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? <span className="button-spinner"></span> : 'Submit Request'}
                                </button>
                                {status === 'error' && <p className="form-feedback error">Something went wrong. Please try again later.</p>}
                            </form>
                        )}
                    </div>
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.98z"></path></svg>
                           <span>+91-80-5555-1234</span>
                        </p>
                         <p>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                           <span>sales@emphz.co.in</span>
                        </p>
                        <p>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                           <span>#42, Industrial Zone, Peenya, Bangalore, 560058, India</span>
                        </p>
                        <div className="map-container">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.99122822596!2d77.50298522045582!3d13.024467978280628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1b068e8519%3A0x5371556ef30863c!2sPeenya%2C%2BBengaluru%2C%2BKarnataka%2C%2BIndia!5e0!3m2!1sen!2sus!4v1698246231945!5m2!1sen!2sus" 
                                width="100%" 
                                height="200" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location of EMPHZ Private Limited"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

// --- MAIN APP COMPONENT ---

const App = () => {
    const {
        lightboxIndex, openLightbox, closeLightbox, prevLightboxItem, nextLightboxItem,
        selectedProduct, openProductModal, closeProductModal
    } = useModalManager();
    
    const [filters, setFilters] = useState<Filters>({
        category: 'All',
        materials: [],
        ipRatings: [],
    });

    const handleFilterChange = (newFilters: Partial<Filters>) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <WhyChooseUs />
                <Clients />
                <Products 
                    onProductClick={openProductModal}
                    filters={filters}
                    onFilterChange={handleFilterChange}
                />
                <Quality />
                <Portfolio onImageClick={openLightbox} />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <Lightbox 
                images={galleryData} 
                currentIndex={lightboxIndex} 
                onClose={closeLightbox}
                onPrev={prevLightboxItem}
                onNext={nextLightboxItem}
            />
            <ProductModal product={selectedProduct} onClose={closeProductModal} />
            <BackToTopButton />
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
