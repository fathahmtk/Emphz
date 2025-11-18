import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlassCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'bg-card/60 backdrop-blur-xl', // Slightly more transparent
        'border border-white/10', // Refined border for better edge definition
        'transition-all duration-300 ease-out',
        'hover:shadow-lg hover:bg-card/75',
        className
      )}
      {...props}
    />
  );
}
