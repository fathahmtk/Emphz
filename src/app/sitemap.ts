
import { type MetadataRoute } from 'next'
import { getFirestore } from '@/firebase/server';
import type { Product, BlogPost } from '@/lib/types';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://emphz.com' // Replace with your actual domain
  const firestore = getFirestore();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
     {
      url: `${baseUrl}/kerala`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
     {
      url: `${baseUrl}/mysore`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
     {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/downloads`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }
  ];

  // Static product category pages from menu data - these are now the detail pages, not category pages.
  // We will generate product URLs dynamically instead.
  const staticProductPages = [
    '/products/enclosures',
    '/products/toilets',
    '/products/kiosks',
    '/products/cabins',
    '/products/villas',
    '/products/custom',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  // Fetch products
  const productsSnapshot = await firestore.collection('products').get();
  const productPages = productsSnapshot.docs.map(doc => {
    const product = doc.data() as Product;
    return {
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(), // Or a dedicated 'updatedAt' field
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  });


  // Fetch blog posts
  const blogPostsSnapshot = await firestore.collection('blog_posts').get();
  const blogPostPages = blogPostsSnapshot.docs.map(doc => {
    const post = doc.data() as BlogPost;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt.toDate(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    }
  });


  return [
    ...staticPages,
    ...staticProductPages,
    ...productPages,
    ...blogPostPages,
  ];
}
