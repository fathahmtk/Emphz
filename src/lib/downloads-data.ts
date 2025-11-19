
import type { TechnicalDownload } from './types';

export const downloadsSeed: Omit<TechnicalDownload, 'id'>[] = [
    {
        "name": "GRP Electrical Enclosures Datasheet",
        "description": "Complete technical specifications for our standard electrical enclosures.",
        "fileUrl": "/downloads/EMPHZ-Datasheet-GRP-Enclosures.pdf"
    },
    {
        "name": "GRP Kiosks Datasheet",
        "description": "Features, dimensions, and options for our GRP utility and industrial kiosks.",
        "fileUrl": "/downloads/EMPHZ-Datasheet-GRP-Kiosks.pdf"
    },
    {
        "name": "Standard Installation Guide",
        "description": "General guide for site preparation and installation of EMPHZ GRP products.",
        "fileUrl": "/downloads/EMPHZ-Installation-Guide.pdf"
    },
    {
        "name": "ISO & Compliance Pack",
        "description": "Our ISO 9001, 14001, and other relevant compliance certificates.",
        "fileUrl": "/downloads/EMPHZ-Compliance-Pack.pdf"
    }
];

