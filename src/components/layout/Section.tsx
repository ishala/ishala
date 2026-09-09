import type { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { Reveal } from '@/components/primitives/Reveal';
import { cn } from '@/lib/cn';

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
  // Diisi bila section sudah punya heading sendiri; eyebrow lalu turun jadi <p> biasa
  labelledBy?: string;
  // Lapis dekoratif full-bleed; komponennya sendiri yang memposisikan diri absolut di belakang isi
  backdrop?: ReactNode;
}

export function Section({ id, label, children, className, labelledBy, backdrop }: SectionProps) {
  const headingId = labelledBy ?? `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      // isolate mengurung z-index negatif backdrop supaya tidak jatuh ke belakang latar halaman
      className={cn('relative isolate scroll-mt-200 py-100 lg:scroll-mt-100', className)}
    >
      {backdrop}
      <Container>
        {/* Eyebrow sekaligus judul section: tanpanya outline dokumen kehilangan tingkat pengelompokan */}
        <Reveal>
          <MonoLabel
            as={labelledBy ? 'p' : 'h2'}
            id={labelledBy ? undefined : headingId}
            className="mb-32 block"
          >
            {label}
          </MonoLabel>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
