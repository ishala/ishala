import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface MonoLabelProps {
  children: ReactNode;
  as?: ElementType;
  id?: string;
  className?: string;
}

export function MonoLabel({ children, as: Tag = 'span', id, className }: MonoLabelProps) {
  return (
    <Tag id={id} className={cn('font-mono text-caption uppercase tracking-caption', className)}>
      {children}
    </Tag>
  );
}
