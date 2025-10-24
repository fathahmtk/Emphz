
import React, { useEffect, useRef } from 'react';
import { User, Shield, Zap } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';

const leadership = [
    { name: 'Muhammed Rashik P', role: 'CEO', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Jithin', role: 'Operations', imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Muhammed Muneer A H', role: 'Engineering', imageUrl: 'https://images.unsplash.com/photo-1627161683011-c881435a26ee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Muhammed Rafeeque', role: 'Sales', imageUrl: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Assainar Thevaroth', role: 'Finance', imageUrl: 'https://images.unsplash.com/photo-1590086782792-42dd2350150d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop' }
];

const milestones = [
    { year: '2018', description: 'EMPHZ was founded with a mission to revolutionize industrial infrastructure using advanced composite materials.' },
    { year: '2020', description: 'Secured a landmark contract with Qatar Electricity & Water, proving our GRP solutions in extreme climates.' },
    { year: '2022', description: 'Achieved ISO 9001:2015 certification, a testament to our unwavering commitment to quality.' },
    { year: '2024', description: 'Opened our new state-of-the-art manufacturing facility in Mysore, Karnataka, doubling our production capacity.' },
];

const CompanyPage: React.FC = () => {
    const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

    usePageMetadata(
        "About EMPHZ | Redefining GRP Manufacturing in India & Beyond",
        "Learn about EMPHZ Global, The GRP Company. Our mission is to engineer confidence in composites, establishing EMPHZ as the global synonym for GRP innovation and reliability.",
        "About EMPHZ, The GRP Company, GRP manufacturer India, composite engineering, EMPHZ team, GRP experts"
    );

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

        const currentRefs = timelineRefs.current;
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

    const breadcrumbLinks = [
        { name: 'Home', path: '/' },
        { name: 'Company' }
    ];

    return (
        <div className="bg-background-light dark:bg-primary-dark">
            <div className="bg-background-default dark:bg-primary-dark relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1920&auto=format&fit=crop" alt="Abstract background texture" className="w-full h-full object-cover opacity-50 dark:opacity-10" />
                    <div className="absolute inset-0 bg-white/95 dark:bg-primary-dark/[.95]"></div>
                </div>
                <div className="relative">
                    <Breadcrumbs links={breadcrumbLinks} />
                    <div className="container mx-auto px-6 py-20">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-text-DEFAULT dark:text-text-DEFAULT mb-4">About EMPHZ: The GRP Company</h1>
                            <p className="text-lg text-text-secondary dark:text-text-secondary">Redefining GRP manufacturing in India and beyond. Our mission is to establish EMPHZ as the global synonym for trust, safety, and innovation in composite manufacturing.</p>
                        </div>

                        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div>
                                <Shield className="mx-auto h-12 w-12 text-accent mb-4"/>
                                <h3 className="text-2xl font-bold font-heading text-text-DEFAULT dark:text-text-DEFAULT mb-2">Who We Are</h3>
                                <p className="text-text-secondary dark:text-text-secondary">A team of engineers and innovators pushing the boundaries of composite materials to build safer, more resilient infrastructure.</p>
                            </div>
                             <div>
                                <Zap className="mx-auto h-12 w-12 text-accent mb-4"/>
                                <h3 className="text-2xl font-bold font-heading text-text-DEFAULT dark:text-text-DEFAULT mb-2">How We Work</h3>
                                <p className="text-text-secondary dark:text-text-secondary">Leveraging automated SMC molding, in-house laboratory testing, and a design philosophy centered on durability and maintainability.</p>
                            </div>
                             <div>
                                <User className="mx-auto h-12 w-12 text-accent mb-4"/>
                                <h3 className="text-2xl font-bold font-heading text-text-DEFAULT dark:text-text-DEFAULT mb-2">Our Leadership</h3>
                                <p className="text-text-secondary dark:text-text-secondary">Guided by a leadership team with deep expertise across engineering, operations, and finance to drive growth and innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* Our Journey Timeline */}
            <div className="py-24">
                <div className="container mx-auto px-6">
                     <h2 className="text-4xl font-extrabold font-heading text-center text-text-DEFAULT dark:text-text-DEFAULT mb-20">Our Journey</h2>
                     <div className="relative">
                        {/* Vertical Lines */}
                        <div className="hidden md:block absolute w-0.5 bg-border-default dark:bg-border-dark h-full top-0 left-1/2 -translate-x-1/2"></div>
                        <div className="md:hidden absolute w-0.5 bg-border-default dark:bg-border-dark h-full top-0 left-4"></div>
                        
                        <div className="space-y-16">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    ref={el => { timelineRefs.current[index] = el; }}
                                    className="timeline-item relative"
                                >
                                    {/* Desktop Layout */}
                                    <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="w-1/2">
                                            <div className={`${index % 2 === 0 ? 'ml-14' : 'mr-14'}`}>
                                                <div className="bg-background-default dark:bg-primary p-6 rounded-lg shadow-md border border-border-default dark:border-border-dark">
                                                    <time className="text-lg font-bold font-heading text-accent">{milestone.year}</time>
                                                    <p className="mt-2 text-text-secondary dark:text-text-secondary">{milestone.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2"></div>
                                    </div>
                                    <div className="hidden md:block absolute w-5 h-5 bg-accent rounded-full left-1/2 -translate-x-1/2 mt-3.5 border-4 border-background-light dark:border-primary-dark"></div>

                                    {/* Mobile Layout */}
                                    <div className="md:hidden flex">
                                        <div className="absolute w-5 h-5 bg-accent rounded-full left-4 -translate-x-1/2 mt-3.5 border-4 border-background-light dark:border-primary-dark"></div>
                                        <div className="ml-10">
                                            <div className="bg-background-default dark:bg-primary p-6 rounded-lg shadow-md border border-border-default dark:border-border-dark">
                                                <time className="text-lg font-bold font-heading text-accent">{milestone.year}</time>
                                                <p className="mt-2 text-text-secondary dark:text-text-secondary">{milestone.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                </div>
            </div>

             <SectionDivider />

            <div className="container mx-auto px-6 py-24">
                <div className="bg-background-default dark:bg-primary p-12 rounded-lg border border-border-default dark:border-border-dark shadow-lg">
                     <h2 className="text-4xl font-extrabold font-heading text-center text-text-DEFAULT dark:text-text-DEFAULT mb-12">Meet Our Team</h2>
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                        {leadership.map(member => (
                            <div key={member.name}>
                                <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-background-default dark:border-border-dark shadow-md object-cover"/>
                                <h4 className="font-bold font-heading text-text-DEFAULT dark:text-text-DEFAULT">{member.name}</h4>
                                <p className="text-sm text-text-secondary dark:text-text-secondary">{member.role}</p>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;
