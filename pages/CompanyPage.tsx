

import React, { useEffect, useRef } from 'react';
import { User, Shield, Zap } from 'lucide-react';

const leadership = [
    { name: 'Muhammed Rashik P', role: 'CEO' },
    { name: 'Jithin', role: 'Operations' },
    { name: 'Muhammed Muneer A H', role: 'Engineering' },
    { name: 'Muhammed Rafeeque', role: 'Sales' },
    { name: 'Assainar Thevaroth', role: 'Finance' }
];

const milestones = [
    { year: '2018', description: 'EMPHZ was founded with a mission to revolutionize industrial infrastructure using advanced composite materials.' },
    { year: '2020', description: 'Secured a landmark contract with Qatar Electricity & Water, proving our GRP solutions in extreme climates.' },
    { year: '2022', description: 'Achieved ISO 9001:2015 certification, a testament to our unwavering commitment to quality.' },
    { year: '2024', description: 'Opened our new state-of-the-art manufacturing facility in Mysore, Karnataka, doubling our production capacity.' },
];

const CompanyPage: React.FC = () => {
    const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

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


    return (
        <div className="bg-background">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">India’s Composite Engineering Partner</h1>
                    <p className="text-lg text-text-secondary">We are dedicated to delivering high-performance GRP solutions for critical power and process infrastructure. Our work is defined by precision engineering, relentless quality control, and a commitment to sustainability.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <Shield className="mx-auto h-12 w-12 text-accent mb-4"/>
                        <h3 className="text-2xl font-bold text-text-DEFAULT mb-2">Who We Are</h3>
                        <p className="text-text-secondary">A team of engineers and innovators pushing the boundaries of composite materials to build safer, more resilient infrastructure.</p>
                    </div>
                     <div>
                        <Zap className="mx-auto h-12 w-12 text-accent mb-4"/>
                        <h3 className="text-2xl font-bold text-text-DEFAULT mb-2">How We Work</h3>
                        <p className="text-text-secondary">Leveraging automated SMC molding, in-house laboratory testing, and a design philosophy centered on durability and maintainability.</p>
                    </div>
                     <div>
                        <User className="mx-auto h-12 w-12 text-accent mb-4"/>
                        <h3 className="text-2xl font-bold text-text-DEFAULT mb-2">Our Leadership</h3>
                        <p className="text-text-secondary">Guided by a leadership team with deep expertise across engineering, operations, and finance to drive growth and innovation.</p>
                    </div>
                </div>
            </div>

            {/* Our Journey Timeline */}
            <div className="bg-background-light py-20">
                <div className="container mx-auto px-6">
                     <h2 className="text-3xl font-bold text-center text-primary mb-16">Our Journey</h2>
                     <div className="relative">
                        {/* Vertical Lines */}
                        <div className="hidden md:block absolute w-0.5 bg-border h-full top-0 left-1/2 -translate-x-1/2"></div>
                        <div className="md:hidden absolute w-0.5 bg-border h-full top-0 left-4"></div>
                        
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    // FIX: The ref callback should not return a value. Changed from an implicit return to a block body.
                                    ref={el => { timelineRefs.current[index] = el; }}
                                    className="timeline-item relative"
                                >
                                    {/* Desktop Layout */}
                                    <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="w-1/2">
                                            <div className={`${index % 2 === 0 ? 'ml-14' : 'mr-14'}`}>
                                                <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                                                    <time className="text-lg font-bold text-primary">{milestone.year}</time>
                                                    <p className="mt-2 text-text-secondary">{milestone.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2"></div>
                                    </div>
                                    <div className="hidden md:block absolute w-5 h-5 bg-accent rounded-full left-1/2 -translate-x-1/2 mt-3.5 border-4 border-background-light"></div>

                                    {/* Mobile Layout */}
                                    <div className="md:hidden flex">
                                        <div className="absolute w-5 h-5 bg-accent rounded-full left-4 -translate-x-1/2 mt-3.5 border-4 border-background-light"></div>
                                        <div className="ml-10">
                                            <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                                                <time className="text-lg font-bold text-primary">{milestone.year}</time>
                                                <p className="mt-2 text-text-secondary">{milestone.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="bg-background-light p-12 rounded-lg">
                     <h2 className="text-3xl font-bold text-center text-primary mb-10">Meet Our Team</h2>
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                        {leadership.map(member => (
                            <div key={member.name}>
                                <img src={`https://picsum.photos/seed/${member.name}/200/200`} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md"/>
                                <h4 className="font-bold text-text-DEFAULT">{member.name}</h4>
                                <p className="text-sm text-text-secondary">{member.role}</p>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;