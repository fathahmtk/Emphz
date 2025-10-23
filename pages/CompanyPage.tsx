
import React from 'react';
import { User, Shield, Zap } from 'lucide-react';

const leadership = [
    { name: 'Muhammed Rashik P', role: 'CEO' },
    { name: 'Jithin', role: 'Operations' },
    { name: 'Muhammed Muneer A H', role: 'Engineering' },
    { name: 'Muhammed Rafeeque', role: 'Sales' },
    { name: 'Assainar Thevaroth', role: 'Finance' }
];

const CompanyPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">India’s Composite Engineering Partner</h1>
                    <p className="text-lg text-gray-600">We are dedicated to delivering high-performance GRP solutions for critical power and process infrastructure. Our work is defined by precision engineering, relentless quality control, and a commitment to sustainability.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <Shield className="mx-auto h-12 w-12 text-accent mb-4"/>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Who We Are</h3>
                        <p className="text-gray-600">A team of engineers and innovators pushing the boundaries of composite materials to build safer, more resilient infrastructure.</p>
                    </div>
                     <div>
                        <Zap className="mx-auto h-12 w-12 text-accent mb-4"/>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">How We Work</h3>
                        <p className="text-gray-600">Leveraging automated SMC molding, in-house laboratory testing, and a design philosophy centered on durability and maintainability.</p>
                    </div>
                     <div>
                        <User className="mx-auto h-12 w-12 text-accent mb-4"/>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Leadership</h3>
                        <p className="text-gray-600">Guided by a leadership team with deep expertise across engineering, operations, and finance to drive growth and innovation.</p>
                    </div>
                </div>

                <div className="mt-20 bg-neutral-light p-12 rounded-lg">
                     <h2 className="text-3xl font-bold text-center text-primary mb-10">Meet Our Team</h2>
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                        {leadership.map(member => (
                            <div key={member.name}>
                                <img src={`https://picsum.photos/seed/${member.name}/200/200`} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                                <h4 className="font-bold text-gray-800">{member.name}</h4>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;
