import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our comprehensive catalog of Glass Reinforced Plastic (GRP) products, including pipes, tanks, fittings, and custom-molded solutions.",
};

export default function ProductsPage() {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="container max-w-7xl px-4 md:px-6 py-12 md:py-20">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Our Products</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            High-quality GRP solutions engineered for durability and performance in any environment.
          </p>
        </div>
      </ScrollReveal>
      
      {categories.map((category, i) => (
        <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-20">
          <ScrollReveal delay={i * 100}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl font-headline border-l-4 border-accent pl-4 mb-8">
              {category}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.category === category).map((product, j) => (
              <ScrollReveal key={product.id} delay={i * 100 + (j + 1) * 150}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
