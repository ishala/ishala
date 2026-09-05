import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface OutlinedButtonProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

const baseClasses =
  'inline-flex items-center gap-8 rounded-lg border border-signal-orange bg-transparent px-24 py-12 font-mono text-caption uppercase tracking-caption text-signal-orange transition-colors hover:border-ice-white hover:text-ice-white';

export function OutlinedButton({ href, children, external = false, className }: OutlinedButtonProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' as const } : {};

  return (
    <a href={href} className={cn(baseClasses, className)} {...externalProps}>
      {children}
    </a>
  );
}
