
import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlassCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'bg-card/80 backdrop-blur-sm',
        'border border-black/10 dark:border-white/20',
        'transition-all duration-300 ease-out',
        'hover:shadow-lg hover:border-accent/50 hover:bg-card/90',
        className
      )}
      {...props}
    />
  );
}
