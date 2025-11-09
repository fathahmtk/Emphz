import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-dvh w-full flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
           <Image
              src="https://picsum.photos/seed/herobg/1920/1080"
              alt="Industrial background"
              data-ai-hint="industrial design"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container max-w-7xl px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <ScrollReveal>
              <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight font-bold text-white shadow-lg">
                Engineered GRP Solutions for Modern Industry
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-lg md:text-xl text-foreground/80">
                Emphz delivers high-performance, corrosion-resistant Glass Reinforced Plastic (GRP) products tailored for the most demanding environments.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link href="/products">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6 max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Our Products</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Dynamic Product Catalog</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our extensive catalog of GRP products, engineered for performance and reliability.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
              {products.slice(0, 2).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Button size="lg" asChild className="group">
                  <Link href="/products">
                    <span>
                      View All Products
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Case Studies</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Proven in the Field</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how Emphz solutions have solved real-world challenges for our clients across various industries.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mx-auto grid grid-cols-1 gap-8 mt-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="text-center mt-12">
               <Button size="lg" asChild className="group">
                  <Link href="/projects">
                    <span>
                      View All Projects
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
