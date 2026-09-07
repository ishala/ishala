import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type SparkleMarkProps = ComponentPropsWithoutRef<'svg'>;

export function SparkleMark({ className, ...rest }: SparkleMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={cn('size-40 shrink-0 text-electric-cobalt', className)}
      {...rest}
    >
      <path d="M20 3 L20 37" />
      <path d="M5.3 11.5 L34.7 28.5" />
      <path d="M5.3 28.5 L34.7 11.5" />
    </svg>
  );
}
