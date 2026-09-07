import type { ComponentPropsWithoutRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ExternalLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
}

export function ExternalLink({ href, children, className, ...rest }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-8 text-ice-white underline decoration-ice-white/40 underline-offset-4 transition-colors hover:text-signal-orange hover:decoration-current',
        className,
      )}
      {...rest}
    >
      {children}
      <ArrowUpRight className="size-16 shrink-0" aria-hidden="true" />
    </a>
  );
}
