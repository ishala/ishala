import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { revealProps } from '@/lib/reveal';

interface RevealProps extends ComponentPropsWithoutRef<'div'> {
  as?: ElementType;
  index?: number;
}

export function Reveal({ as: Tag = 'div', index = 0, children, ...rest }: RevealProps) {
  return (
    <Tag {...revealProps(index)} {...rest}>
      {children}
    </Tag>
  );
}
