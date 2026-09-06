import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type StatementTextProps = ComponentPropsWithoutRef<'p'>;

export function StatementText({ children, className, ...rest }: StatementTextProps) {
  return (
    <p
      // Fog gagal ambang 4.5:1 di bawah 24px, jadi ukurannya dikunci di heading-sm
      className={cn(
        'max-w-prose font-monument text-heading-sm leading-prose tracking-heading-sm text-fog',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}
