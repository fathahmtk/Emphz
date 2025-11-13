
import React from 'react';
import { PROJECTS_DATA } from './constants.tsx';
import { Pill } from './ui.tsx';

// Carousel component for each project
const ProjectCarousel: React.FC<{ images: string[], caption: string }> = ({ images, caption }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const hasMultipleImages = images.length > 1;

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <figure className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm h-full flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                {images.map((src, index) => (
                    <img 
                        key={src}
                        src={src} 
                        alt={`${caption} - image ${index + 1}`} 
                        className={`absolute inset-0 h-full w-full object-cover ${index === currentIndex ? 'block' : 'hidden'}`}
                        loading="lazy" 
                    />
                ))}

                {hasMultipleImages && (
                    <>
                        <button 
                            onClick={goToPrevious} 
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/60 focus:opacity-100 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button 
                            onClick={goToNext} 
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/60 focus:opacity-100 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
                            {images.map((_, slideIndex) => (
                                <button 
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    aria-label={`Go to image ${slideIndex + 1}`}
                                    className={`h-2 w-2 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                                ></button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <figcaption className="mt-3 flex-grow text-sm text-slate-600">{caption}</figcaption>
        </figure>
    );
};


const Projects = () => {
    return (
        <section id="projects" className="border-t border-slate-200 bg-slate-50" role="region" aria-label="Projects">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="flex items-end justify-between">
                <h2 className="text-3xl font-bold">{PROJECTS_DATA.title}</h2>
                <Pill>{PROJECTS_DATA.tag}</Pill>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                {PROJECTS_DATA.items.map((project, index) => (
                    <ProjectCarousel key={index} images={project.images} caption={project.cap} />
                ))}
            </div>
            </div>
        </section>
    );
};

export default Projects;