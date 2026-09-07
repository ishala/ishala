import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type TimelineProps = ComponentPropsWithoutRef<'ol'>;

export function Timeline({ children, className, ...rest }: TimelineProps) {
  return (
    <ol className={cn('flex flex-col gap-40 border-l border-iron-edge', className)} {...rest}>
      {children}
    </ol>
  );
}
