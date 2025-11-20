
import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlassCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'bg-card/70 backdrop-blur-md',
        'border border-white/20',
        'transition-all duration-300 ease-out',
        'shadow-lg',
        className
      )}
      {...props}
    />
  );
}
