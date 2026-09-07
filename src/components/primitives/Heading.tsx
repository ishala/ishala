import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type HeadingSize = 'lg' | 'sm';

const sizeClasses: Record<HeadingSize, string> = {
  lg: 'text-title leading-title tracking-title',
  sm: 'text-heading-sm leading-heading-sm tracking-heading-sm',
};

interface HeadingProps extends ComponentPropsWithoutRef<'h2'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  size?: HeadingSize;
}

export function Heading({
  as: Tag = 'h2',
  size = 'lg',
  children,
  className,
  ...rest
}: HeadingProps) {
  return (
    <Tag className={cn('font-monument', sizeClasses[size], className)} {...rest}>
      {children}
    </Tag>
  );
}
