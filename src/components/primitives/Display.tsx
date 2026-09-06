import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

interface DisplayProps extends ComponentPropsWithoutRef<'p'> {
  as?: 'h1' | 'h2' | 'p';
}

export function Display({ as: Tag = 'p', children, className, ...rest }: DisplayProps) {
  return (
    <Tag
      className={cn(
        'font-monument text-hero uppercase leading-hero tracking-hero text-balance',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
