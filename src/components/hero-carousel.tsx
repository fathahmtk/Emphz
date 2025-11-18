
'use client';

import * as React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

interface HeroCarouselProps {
  images: ImagePlaceholder[];
  className?: string;
}

export function HeroCarousel({ images, className }: HeroCarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      // The fade effect is handled by custom CSS
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div
      className={cn('absolute inset-0 z-0 overflow-hidden', className)}
      ref={emblaRef}
    >
      <div className="flex h-full">
        {images.map((image, index) => (
          <div className="relative min-w-0 flex-[0_0_100%] h-full" key={index}>
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
