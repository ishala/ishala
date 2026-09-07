import { BodyText } from '@/components/primitives/BodyText';
import { Card } from '@/components/primitives/Card';
import { ExternalLink } from '@/components/primitives/ExternalLink';
import { Heading } from '@/components/primitives/Heading';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { certifications } from '@/data/resume';

export function CertificationGrid() {
  return (
    <ul className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
      {certifications.map((certification) => (
        <Card as="li" key={certification.name} className="flex flex-col gap-12">
          <MonoLabel as="p">{certification.date}</MonoLabel>

          <Heading as="h4" size="sm">
            <ExternalLink href={certification.url}>{certification.name}</ExternalLink>
          </Heading>

          {/* mt-auto menahan penerbit di dasar kartu supaya sejajar antar-kolom */}
          <BodyText className="mt-auto">{certification.issuer}</BodyText>
        </Card>
      ))}
    </ul>
  );
}
