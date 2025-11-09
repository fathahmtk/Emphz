import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/lib/types";
import { GlassCard } from "./glass-card";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <GlassCard className="h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            data-ai-hint={product.imageHint}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="mb-2 text-xl font-headline">{product.name}</CardTitle>
        <p className="text-muted-foreground text-sm flex-grow">{product.description}</p>
        <div className="mt-4 flex gap-2">
            <Button variant="secondary" className="w-full">
                <Eye className="mr-2 h-4 w-4" />
                Quick View
            </Button>
            <Button asChild className="w-full group">
                <Link href={`/products#${product.id}`}>
                    Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
        </div>
      </CardContent>
    </GlassCard>
  );
}
