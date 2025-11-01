import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCategoryBySlug } from '../hooks/useCategoryBySlug';
import MetaTags from '../components/MetaTags';
import { SEO_DATA, FALLBACK_LOGO_URL } from '../constants';
import Button from '../components/Button';
import Breadcrumbs, { BreadcrumbItem } from '../components/Breadcrumbs';
import SkeletonProductCard from '../components/SkeletonProductCard';
import VirtualProductGrid from '../components/VirtualProductGrid';

const ProductCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { category, isLoading, error } = useCategoryBySlug(categorySlug);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="h-6 bg-[var(--color-border)] rounded-full w-1/3 mb-12 animate-skeleton-pulse"></div>
         <div className="h-10 bg-[var(--color-surface-secondary)] rounded-full w-2/3 mb-4 animate-skeleton-pulse"></div>
         <div className="h-6 bg-[var(--color-border)] rounded-full w-1/2 mb-16 animate-skeleton-pulse"></div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => <SkeletonProductCard key={index} />)}
         </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error Loading Category</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-md">
          There was a problem fetching the details for this product category. Please try again.
        </p>
        <div className="flex space-x-4">
            <Button onClick={() => window.location.reload()} variant="primary">
            Retry
            </Button>
            <Button onClick={() => navigate('/products')} variant="secondary">
            Back to Products
            </Button>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <>
        <MetaTags title="Category Not Found" description="The requested product category could not be found." />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8">Sorry, we couldn't find the product category you're looking for.</p>
          <Button href="/products" variant="primary">
            Back to All Categories
          </Button>
        </div>
      </>
    );
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: category.name },
  ];
  
  const hasRealImage = !!category.image;
  const imageUrl = category.image || FALLBACK_LOGO_URL;

  return (
    <>
      <MetaTags
        title={SEO_DATA.productCategory.title(category.name)}
        description={SEO_DATA.productCategory.description(category.tagline)}
      />

      {/* New Category Hero Section */}
      <section className="relative h-[45vh] bg-[var(--color-background)] text-white flex items-center justify-center text-center overflow-hidden">
        <div className={`absolute inset-0 ${!hasRealImage ? 'bg-transparent' : ''}`}>
          <img
            src={imageUrl}
            alt={`Background for ${category.name}`}
            loading="eager"
            className={`w-full h-full ${hasRealImage ? 'object-cover' : 'object-contain p-12 opacity-10'}`}
          />
          {hasRealImage && <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>}
        </div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fadeInUp">
            {category.name}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {category.tagline}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbItems} className="mb-12" />
        
        <main>
          <VirtualProductGrid products={category.products} categoryName={category.name} />

          {(category.sharedHighlights && category.sharedHighlights.length > 0) && (
            <div className="mt-20 p-8 bg-[var(--color-surface-primary)] backdrop-blur-lg rounded-[var(--radius)] shadow-sm border border-[var(--color-border)]">
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6 text-center">Shared Technical Highlights</h3>
              <ul className="list-disc list-inside text-[var(--color-text-secondary)] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl mx-auto">
                {category.sharedHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {(category.technicalSnapshot && category.technicalSnapshot.length > 0) && (
            <div className="mt-12 p-8 bg-[var(--color-surface-primary)] backdrop-blur-lg rounded-[var(--radius)] shadow-sm border border-[var(--color-border)]">
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6 text-center">Technical Snapshot</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-black/20">
                    <tr>
                      <th className="py-3 px-6 text-left font-semibold text-sm text-[var(--color-text-secondary)]">Parameter</th>
                      <th className="py-3 px-6 text-left font-semibold text-sm text-[var(--color-text-secondary)]">Specification</th>
                      <th className="py-3 px-6 text-left font-semibold text-sm text-[var(--color-text-secondary)]">Certification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    {category.technicalSnapshot.map((param, index) => (
                      <tr key={index} className="hover:bg-white/5">
                        <td className="py-4 px-6 text-[var(--color-text-primary)]">{param.parameter}</td>
                        <td className="py-4 px-6 text-[var(--color-text-secondary)]">{param.specification}</td>
                        <td className="py-4 px-6 text-[var(--color-text-secondary)]">{param.certification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>
    </>
  );
};

export default ProductCategoryPage;