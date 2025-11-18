
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

interface PageHeroProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export function PageHero({ title, description, imageUrl, imageHint }: PageHeroProps) {
  return (
    <section className="relative h-[40dvh] w-full flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src={imageUrl}
                alt={description}
                data-ai-hint={imageHint}
                fill
                className="object-cover"
                priority
            />
        </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-primary-foreground">
          <ScrollReveal>
            <h1 className="!leading-tight text-4xl font-bold font-headline tracking-tighter text-white shadow-lg sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg text-gray-200/90 md:text-xl">
              {description}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
