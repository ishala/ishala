import type { ComponentPropsWithoutRef } from 'react';
import { Card } from '@/components/primitives/Card';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { cn } from '@/lib/cn';

interface TechIconProps extends ComponentPropsWithoutRef<'div'> {
  label: string;
  src: string;
  width: number;
  height: number;
}

export function TechIcon({ label, src, width, height, className, ...rest }: TechIconProps) {
  return (
    <Card className={cn('flex flex-col items-center gap-16 p-24 text-center', className)} {...rest}>
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        // Atribut menyatakan ukuran berkas; kotak tampil dikunci 40x40 dan object-contain menahan distorsi
        className="size-40 object-contain"
      />
      <MonoLabel>{label}</MonoLabel>
    </Card>
  );
}
