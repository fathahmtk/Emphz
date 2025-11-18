
import type { Product, Project } from './types';
import { productsSeed } from './products-data';

export const projectsSeed: Omit<Project, 'id'>[] = [
    {
        title: "Masdar City Solar Farm Enclosures",
        details: "Supplied and installed 200+ IP65 GRP enclosures for combiner boxes and monitoring equipment at the Masdar City solar park. The solution provided superior UV resistance and thermal management in a harsh desert environment, replacing corroded metal predecessors.",
        clientType: "Renewable Energy",
        location: "Abu Dhabi, UAE",
        beforeImageUrl: "https://picsum.photos/seed/old-solar/800/600",
        afterImageUrl: "https://images.unsplash.com/photo-1509389928833-fe62aef36deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzb2xhciUyMGZhcm18ZW58MHx8fHwxNzYzNDUzNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        title: "Dubai Metro Information Kiosks",
        details: "Designed and delivered 50 custom GRP information kiosks for the Dubai Metro expansion project. The kiosks featured integrated touch screens and cooling systems, meeting stringent public transport authority requirements for durability and aesthetics.",
        clientType: "Public Infrastructure",
        location: "Dubai, UAE",
        beforeImageUrl: "https://picsum.photos/seed/old-kiosk/800/600",
        afterImageUrl: "https://images.unsplash.com/photo-1476036604315-fed0874dfd55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxHUlAlMjBraW9za3xlbnwwfHx8fDE3NjM0NTM2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        title: "ADNOC Refinery Instrumentation Upgrade",
        details: "Provided corrosion-proof GRP instrumentation cabinets for the Ruwais refinery upgrade. The non-conductive and chemically-resistant enclosures protect critical sensors and control units in a highly corrosive and hazardous Zone 2 environment.",
        clientType: "Oil & Gas",
        location: "Ruwais, UAE",
        beforeImageUrl: "https://picsum.photos/seed/old-refinery/800/600",
        afterImageUrl: "https://images.unsplash.com/photo-1616785324021-c34336c53573?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

// Helper function to generate IDs from names
function generateId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function getProductsWithIds(): Product[] {
    return productsSeed.map(p => ({
        ...p,
        id: generateId(p.name)
    }))
}

export function getProjectsWithIds(): Project[] {
    return projectsSeed.map(p => ({
        ...p,
        id: generateId(p.title)
    }))
}
