
import type { ProjectCaseStudy } from './types';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        throw new Error(`Placeholder image with id "${id}" not found.`);
    }
    return img.imageUrl;
}

export const projectsSeed: Omit<ProjectCaseStudy, 'id'>[] = [
    {
        title: 'Corrosion Control Upgrade for Water Utility',
        details: 'Replaced over 200 corroded metal enclosures at a major water treatment facility with EMPHZ IP66 GRP enclosures. The project eliminated recurring maintenance costs and improved equipment reliability in a high-humidity, chlorine-rich environment.',
        clientType: 'Public Utility',
        location: 'Abu Dhabi, UAE',
        beforeImageUrl: findImage('case-study-before-1'),
        afterImageUrl: findImage('case-study-after-1'),
    },
    {
        title: 'Industrial Plant Modernization',
        details: 'Delivered custom-engineered GRP kiosks and control panel enclosures for a new automated manufacturing line. The non-conductive, impact-resistant solutions provided enhanced safety and durability compared to traditional alternatives.',
        clientType: 'EPC Contractor',
        location: 'Dubai, UAE',
        beforeImageUrl: findImage('case-study-before-2'),
        afterImageUrl: findImage('case-study-after-2'),
    },
];
