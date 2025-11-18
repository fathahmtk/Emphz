
import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlassCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'bg-card/20 backdrop-blur-sm', // Slightly more transparent
        'border border-white/10', // Refined border for better edge definition
        'transition-all duration-300 ease-out',
        'hover:shadow-lg hover:border-accent/50 hover:bg-card/30',
        className
      )}
      {...props}
    />
  );
}
