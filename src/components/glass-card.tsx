import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlassCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'bg-card/60 backdrop-blur-sm',
        'border-white/20',
        'transition-all duration-300 ease-out',
        'hover:shadow-xl hover:shadow-primary/10 hover:bg-card/80 hover:-translate-y-1',
        className
      )}
      {...props}
    />
  );
}
