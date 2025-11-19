
import type { Industry } from './types';

export const industriesSeed: Omit<Industry, 'id'>[] = [
    { name: "Tourism & Resorts", description: "High-performance villas and cabins for resort destinations." },
    { name: "Construction", description: "Toilet cabins, office cabins, and site enclosures." },
    { name: "Government / Panchayat", description: "Sanitation cabins, kiosks, utility enclosures." },
    { name: "Solar EPC", description: "Battery/inverter enclosures built for environmental exposure." },
    { name: "Retail & Food Service", description: "Fast-deploy GRP kiosks and retail pods." },
    { name: "Security", description: "Guard cabins for residential, commercial, and industrial sites." },
    { name: "Generator Room", description: "Custom GRP enclosures for DG sets, ensuring sound and thermal insulation." },
    { name: "Automobile", description: "Specialized GRP components for vehicle bodies and custom parts." }
];
