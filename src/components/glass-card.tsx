import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlassCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'bg-card/70 backdrop-blur-xl',
        'border',
        'transition-all duration-300 ease-out',
        'hover:shadow-2xl hover:shadow-primary/10 hover:bg-card/90 hover:-translate-y-1',
        className
      )}
      {...props}
    />
  );
}
