import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  children: ReactNode;
  as?: 'div' | 'li' | 'article' | 'figure';
  className?: string;
}

export function Card({ children, as: Tag = 'div', className }: CardProps) {
  return (
    <Tag className={cn('rounded-2xl border border-ice-white/20 bg-carbon p-32', className)}>
      {children}
    </Tag>
  );
}
