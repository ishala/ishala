import type { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { cn } from '@/lib/cn';

interface SectionProps {
  id: string;
  label?: string;
  headingId?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, label, headingId, children, className }: SectionProps) {
  return (
    <section
      id={id}
      // Nama aksesibel diambil dari heading section; label mono hanyalah eyebrow, bukan judul
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : label}
      // Nav sticky masih membungkus dua baris sampai di bawah lg (122-162px), jadi offsetnya lebih besar di sana
      className={cn('scroll-mt-200 py-100 lg:scroll-mt-100', className)}
    >
      <Container>
        {label ? (
          <MonoLabel as="p" className="mb-32 block">
            {label}
          </MonoLabel>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
