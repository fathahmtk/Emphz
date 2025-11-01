import React from 'react';
import { Link } from 'react-router-dom';
import { SEO_DATA, FALLBACK_LOGO_URL } from '../constants';
import MetaTags from '../components/MetaTags';
import { useProductCatalog } from '../hooks/useProductCatalog';

const ProductsPage: React.FC = () => {
  const productCatalog = useProductCatalog();

  return (
    <>
      <MetaTags
        title={SEO_DATA.products.title}
        description={SEO_DATA.products.description}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Product Categories
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Pioneering corrosion-proof, high-performance composite products built for power, infrastructure, and sustainability. Explore our specialized product lines below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCatalog.map((category) => {
            const hasRealImage = !!category.image;
            const imageUrl = category.image || FALLBACK_LOGO_URL;
            
            return (
              <Link
                key={category.code}
                to={`/products/category/${category.slug}`}
                className="block group bg-[var(--color-surface-primary)] rounded-[var(--radius)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 border border-[var(--color-border)] overflow-hidden transform hover:-translate-y-1 flex flex-col hover:border-[var(--color-border-hover)]"
              >
                <div className={`relative h-56 overflow-hidden ${!hasRealImage ? 'bg-gray-100' : ''}`}>
                  <img
                    src={imageUrl}
                    alt={category.name}
                    loading="lazy"
                    className={`w-full h-full ${hasRealImage ? 'object-cover transition-transform duration-500 group-hover:scale-110' : 'object-contain p-8 opacity-40'}`}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 flex-grow">
                    {category.tagline}
                  </p>
                  <div className="mt-auto pt-4 text-sm font-semibold text-[var(--color-brand)] group-hover:underline">
                    View Products &rarr;
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
