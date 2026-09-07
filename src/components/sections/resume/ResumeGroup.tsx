import type { ReactNode } from 'react';
import { Heading } from '@/components/primitives/Heading';
import { SparkleMark } from '@/components/primitives/SparkleMark';

interface ResumeGroupProps {
  title: string;
  children: ReactNode;
}

export function ResumeGroup({ title, children }: ResumeGroupProps) {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex items-start gap-16">
        <SparkleMark />
        <Heading as="h3">{title}</Heading>
      </div>
      {children}
    </div>
  );
}
