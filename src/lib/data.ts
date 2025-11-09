
import { type DownloadLink } from '@/lib/types';

// This file is now only used for data that is not yet in Firestore.
// Products, Projects, and Leads are now fetched from Firestore.

export const downloads: DownloadLink[] = [
  {
    id: 'dl-01',
    title: 'Emphz Corporate Brochure',
    description: 'An overview of our company, solutions, and commitment to quality.',
    fileUrl: '#'
  },
  {
    id: 'dl-02',
    title: 'GRP Pipe Systems Data Sheet',
    description: 'Technical specifications, pressure ratings, and installation guidelines for our GRP pipes.',
    fileUrl: '#'
  },
  {
    id: 'dl-03',
    title: 'GRP Tank Solutions Data Sheet',
    description: 'Details on our storage tank capabilities, resin systems, and available configurations.',
    fileUrl: '#'
  },
  {
    id: 'dl-04',
    title: 'Chemical Resistance Guide',
    description: 'A comprehensive guide to the performance of our GRP products with various chemicals.',
    fileUrl: '#'
  }
];
