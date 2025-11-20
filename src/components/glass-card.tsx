
import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlassCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'bg-card/70 backdrop-blur-md',
        'border border-black/10 dark:border-white/20',
        'transition-all duration-300 ease-out',
        'hover:shadow-lg hover:border-primary/30 hover:bg-card/80',
        className
      )}
      {...props}
    />
  );
}
