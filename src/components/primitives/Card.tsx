import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

// HTMLAttributes<HTMLElement>, bukan props <div>: tag tujuan bisa li/article/figure
interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'li' | 'article' | 'figure';
}

export function Card({ as: Tag = 'div', children, className, ...rest }: CardProps) {
  return (
    <Tag
      className={cn('rounded-2xl border border-ice-white/20 bg-carbon p-32', className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
