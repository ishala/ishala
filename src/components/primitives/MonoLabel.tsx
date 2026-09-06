import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '@/lib/cn';

interface MonoLabelProps extends ComponentPropsWithoutRef<'span'> {
  as?: ElementType;
}

export function MonoLabel({ as: Tag = 'span', children, className, ...rest }: MonoLabelProps) {
  return (
    <Tag className={cn('font-mono text-caption uppercase tracking-caption', className)} {...rest}>
      {children}
    </Tag>
  );
}
