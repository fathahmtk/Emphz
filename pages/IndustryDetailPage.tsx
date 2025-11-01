import React from 'react';
import { Link } from 'react-router-dom';
import { Industry } from '../types';
import { SEO_DATA } from '../constants';
import MetaTags from '../components/MetaTags';
import ProductCard from '../components/ProductCard';
import { useUIState } from '../UIStateContext';
import Button from '../components/Button';
import Breadcrumbs, { BreadcrumbItem } from '../components/Breadcrumbs';
import { useProductCatalog } from '../hooks/useProductCatalog';

interface IndustryDetailPageProps {
  industry: Industry;
}

const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ industry }) => {
  const { openQuickView } = useUIState();
  const productCatalog = useProductCatalog();

  const featuredProducts = React.useMemo(() => {
    const products = [];
    for (const category of productCatalog) {
      for (const product of category.products) {
        if (industry.featuredProducts.includes(product.code)) {
          products.push({ product, categoryName: category.name });
        }
      }
    }
    return products;
  }, [industry.featuredProducts, productCatalog]);

  const relatedCategories = React.useMemo(() => {
    return productCatalog.filter(cat => industry.relatedCategories.includes(cat.code));
  }, [industry.relatedCategories, productCatalog]);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Industries', path: '/industries' },
    { label: industry.name },
  ];

  return (
    <>
      <MetaTags
        title={SEO_DATA.industryDetail.title(industry.name)}
        description={SEO_DATA.industryDetail.description(industry.name, industry.description)}
      />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden bg-[var(--color-background)]">
        <img
          src={industry.image}
          alt={`${industry.name} industry applications`}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 animate-fadeInUp">
            Solutions for the {industry.name} Industry
          </h1>
          <p className="text-lg sm:text-xl font-light animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {industry.description}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumbs items={breadcrumbItems} className="mb-12" />
        
        {/* Overview Section */}
        <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">EMPHZ's Advantage in {industry.name}</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {industry.details.map((detail, index) => (
                    <div key={index} className="flex items-start p-4 bg-[var(--color-surface-primary)] backdrop-blur-md rounded-lg border border-[var(--color-border)]">
                        <svg className="w-6 h-6 mr-4 text-[var(--color-brand)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <p className="text-[var(--color-text-secondary)]">{detail}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Featured Products for {industry.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map(({ product, categoryName }) => (
                <ProductCard key={product.code} product={product} onQuickViewClick={openQuickView} categoryName={categoryName} />
              ))}
            </div>
          </section>
        )}
        
        {/* Relevant Categories */}
        {relatedCategories.length > 0 && (
          <section className="my-20 p-8 bg-[var(--color-surface-primary)] backdrop-blur-lg rounded-[var(--radius)] shadow-[var(--shadow-lg)] border border-[var(--color-border)]">
            <h2 className="text-3xl font-bold text-center mb-10">Relevant Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedCategories.map(category => (
                <Link key={category.code} to={`/products/category/${category.slug}`} className="block text-center p-6 bg-[var(--color-surface-secondary)] rounded-lg shadow-sm hover:shadow-lg border border-transparent hover:border-[var(--color-brand)] transition-all transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{category.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{category.tagline}</p>
                  <span className="mt-4 inline-block text-[var(--color-brand)] text-sm font-medium">Explore Category &rarr;</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Have a project in the {industry.name} sector?</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
                Our team can provide a tailored GRP composite solution to meet your specific requirements.
            </p>
            <Button href="/contact" variant="secondary" className="text-lg">
                Contact Our Specialists
            </Button>
        </section>

      </div>
    </>
  );
};

export default IndustryDetailPage;
