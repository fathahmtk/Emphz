
import { Timestamp } from 'firebase/firestore';
import type { BlogAuthor, BlogPost } from './types';

export const authorsSeed: Omit<BlogAuthor, 'id'>[] = [
    {
        name: 'Muhammed Rashik',
        avatarUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPXd3SB3ha5w7wQYPCYln2z7mHwS2GWu0AiuUXj7QzLOpT54vA9BriS2YorAIZu9Qm0ppfMXMU6tBiJ4dyG4yhafK5leMobYiQCD8pWPWynVssz2_ueIQwbCl2XYIagOoycgZH5wk512mzKaUCSYsAXtQ=w1280-h720-s-no-gm?authuser=0',
        title: 'CEO, EMPHZ'
    },
    {
        name: 'Engineering Team',
        avatarUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Technical Staff'
    }
];

export const postsSeed: Omit<BlogPost, 'id'>[] = [
    {
        title: 'Why GRP is the Superior Choice for Kerala\'s Climate',
        slug: 'why-grp-is-superior-for-kerala-climate',
        authorId: 'muhammed-rashik',
        publishedAt: Timestamp.fromDate(new Date('2024-05-15T10:00:00Z')),
        category: 'GRP Technology',
        heroImageUrl: 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjB2aWxsYXxlbnwwfHx8fDE3NjM0Nzc2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        summary: 'Kerala\'s unique climate, with its high humidity, intense monsoons, and saline coastal air, poses significant challenges for traditional construction materials. Discover why Glass-Reinforced Plastic (GRP) is not just an alternative, but the superior choice for long-lasting, low-maintenance structures in this demanding environment.',
        content: `
### The Challenge: Kerala's Climate vs. Traditional Materials

Traditional materials like steel, wood, and even concrete struggle in Kerala:
- **Steel** rusts and corrodes at an accelerated rate due to the high salinity and moisture.
- **Wood** is susceptible to termites, rot, and warping in the humid conditions.
- **Concrete**, while strong, can develop cracks, leading to water ingress, mold, and eventual structural weakening.

These issues lead to high maintenance costs, frequent repairs, and a shorter lifespan for buildings and enclosures.

### The Solution: GRP's Inherent Advantages

GRP is a composite material made from a polymer matrix reinforced with fine glass fibers. This composition gives it a unique set of properties that make it ideal for Kerala's climate:

**1. 100% Corrosion-Proof:** Unlike metal, GRP does not rust or corrode. It is chemically inert to salt, moisture, and a wide range of chemicals. This makes it the perfect material for coastal areas and industrial zones. An EMPHZ GRP enclosure installed today will have the same structural integrity decades from now, with zero corrosion.

**2. Completely Waterproof:** Our GRP products are manufactured in a single, seamless mold. This monolithic construction means there are no joints or seams that can fail over time, making them 100% leak-proof. This is critical during Kerala's heavy monsoon season, preventing water damage, electrical faults, and the growth of unhealthy mold and mildew.

**3. UV Resistant:** The intense tropical sun can degrade many materials, causing them to become brittle and discolored. EMPHZ products are finished with a high-performance gelcoat that provides excellent protection against UV radiation, ensuring the structure maintains its color and strength for years.

**4. High Strength, Low Weight:** GRP has a higher strength-to-weight ratio than steel. This means our structures are incredibly strong and durable, yet lightweight enough for easy transportation and rapid installation, often without the need for heavy cranes or extensive foundation work. This is a major advantage for projects in remote or difficult-to-access locations.

### Conclusion: An Investment in Durability

Choosing GRP is not just choosing a material; it's choosing a long-term solution that saves money and hassle. By investing in EMPHZ's engineered GRP products, you are choosing a maintenance-free, corrosion-proof, and weatherproof asset that is built to outperform and outlast in the demanding environment of South India.
        `
    },
    {
        title: 'The EMPHZ Difference: Industrial Manufacturing vs. Local Fabrication',
        slug: 'industrial-manufacturing-vs-local-fabrication',
        authorId: 'engineering-team',
        publishedAt: Timestamp.fromDate(new Date('2024-05-22T11:00:00Z')),
        category: 'Manufacturing',
        heroImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOub2oG1EihitBFUwF9AUR0PXrwoeSe-yfKf7GLI2JRsuJpw2K5Ew8eYtrmixZu_mpDFreoX9XS7ws_DZf1WFmMTPeQkgJ6-3Dw4xeaYSAzvRRm3KqjY6bIO7x23nYf39z3P-27mVlRzxRnJMM5cQJ_aw=w1546-h870-s-no-gm?authuser=0',
        summary: 'Not all GRP is created equal. While local fabricators offer custom solutions, they often lack the process control, standardization, and quality assurance of an industrial manufacturer. Learn how EMPHZ\'s factory-based approach delivers a superior product with predictable performance.',
        content: `
### The Local Fabricator Model

Local GRP fabricators often rely on manual processes and hand-layup techniques. While this can be good for one-off custom jobs, it introduces significant variability:
- **Inconsistent Thickness:** Manual application of resin and fiberglass can lead to walls with uneven thickness, creating weak spots.
- **Curing Issues:** Without controlled temperature and humidity, the resin may not cure properly, compromising the structural integrity and chemical resistance of the final product.
- **Surface Imperfections:** Hand finishing can result in pinholes, waves, and other surface defects that not only look unprofessional but can also become points of failure over time.

### The EMPHZ Industrial Approach

At our Mysore manufacturing facility, we have industrialized the GRP production process to eliminate these variables and ensure consistent quality in every unit.

**1. Precision Molds:** Our process begins with high-quality, CNC-milled molds. This ensures every product has precise dimensions, sharp lines, and a smooth, professional finish right from the start.

**2. Standardized Lay-up Schedules:** We use a proprietary lay-up schedule for each product, specifying the exact type, weight, and orientation of fiberglass mats and resins. This guarantees consistent structural strength and performance across all units.

**3. Controlled Curing:** Products are cured in a controlled environment with monitored temperature and humidity. This ensures the polyester or epoxy resin achieves a full, uniform cure, maximizing its strength and durability.

**4. Industrial Finishing:** After demolding, our products go through a multi-stage finishing process, including industrial-grade painting systems. This results in a flawless, UV-resistant finish that is far superior to hand-applied coats.

**5. End-to-End Quality Control:** Every step, from raw material inspection to final product testing, is governed by a strict QC protocol. We check for dimensional accuracy, structural integrity, and finish quality, ensuring that every product that leaves our factory meets the EMPHZ standard.

### Why It Matters

The difference is tangible. An EMPHZ GRP cabin or enclosure offers predictable performance, a longer service life, and a professional aesthetic that local fabrication cannot consistently match. For mission-critical applications, large-scale deployments, or high-end architectural projects, the reliability of industrial manufacturing is not a luxury—it is a necessity.
`
    }
];
