import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Industry } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const isVisible = useIntersectionObserver(cardRef);

    return (
        <Link
            ref={cardRef}
            to={`/industries/${industry.slug}`}
            className={`block relative overflow-hidden rounded-[var(--radius)] shadow-md group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0 ${isVisible ? 'animate-fadeInScaleUp' : ''}`}
        >
            <img
                src={industry.image}
                alt={industry.name}
                loading="lazy"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-left text-white">
                    <h3 className="text-2xl font-semibold mb-2">{industry.name}</h3>
                    <p className="text-sm opacity-90">{industry.applicationExample}</p>
                    <div className="mt-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                        Learn More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default IndustryCard;
