import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type BodyTextProps = ComponentPropsWithoutRef<'p'>;

export function BodyText({ children, className, ...rest }: BodyTextProps) {
  return (
    <p className={cn('font-monument text-body leading-body tracking-body', className)} {...rest}>
      {children}
    </p>
  );
}
