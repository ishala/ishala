import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

interface StatementTextProps extends ComponentPropsWithoutRef<'p'> {
  tone?: 'muted' | 'bright';
}

// Fog gagal ambang 4.5:1 di bawah 24px, jadi ukurannya dikunci di heading-sm
const toneClass = {
  muted: 'text-fog',
  // Di atas kanvas partikel Fog terukur turun sampai 1,67:1; hanya ice-white yang bertahan di sana
  bright: 'text-ice-white',
};

export function StatementText({
  tone = 'muted',
  children,
  className,
  ...rest
}: StatementTextProps) {
  return (
    <p
      className={cn(
        'max-w-prose font-monument text-heading-sm leading-prose tracking-heading-sm',
        toneClass[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}
