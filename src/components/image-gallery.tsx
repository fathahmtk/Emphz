
'use client';
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { type ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: ImagePlaceholder[];
  className?: string;
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  return (
    <>
      <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
        {images.map((image) => (
          <Card 
            key={image.id}
            className="overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <CardContent className="p-0">
                <div className="relative aspect-square">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2">
          {selectedImage && (
            <div className="relative aspect-video">
                 <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.description}
                    fill
                    className="object-contain"
                />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
