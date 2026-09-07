import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type TimelineItemProps = ComponentPropsWithoutRef<'li'>;

export function TimelineItem({ children, className, ...rest }: TimelineItemProps) {
  return (
    <li className={cn('relative flex flex-col gap-12 pl-32', className)} {...rest}>
      {/* Titik penanda digeser setengah lebarnya supaya duduk tepat di atas garis rail milik Timeline */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-8 size-8 -translate-x-1/2 rounded-full bg-electric-cobalt"
      />
      {children}
    </li>
  );
}
