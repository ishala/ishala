import type { ComponentPropsWithoutRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ScrollIndicatorProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
  label: string;
}

export function ScrollIndicator({ href, label, className, ...rest }: ScrollIndicatorProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        'flex size-40 items-center justify-center text-ice-white transition-colors hover:text-signal-orange',
        className,
      )}
      {...rest}
    >
      <span className="flex size-24 items-center justify-center rounded-lg border border-current">
        <ChevronDown className="size-16" aria-hidden="true" />
      </span>
    </a>
  );
}
