import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

interface BulletListProps extends ComponentPropsWithoutRef<'ul'> {
  items: string[];
}

export function BulletList({ items, className, ...rest }: BulletListProps) {
  return (
    <ul
      // Tanpa flex: item flex kehilangan marker list-disc di Chrome
      className={cn(
        'list-disc space-y-8 pl-16 font-monument text-body leading-body tracking-body',
        className,
      )}
      {...rest}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
