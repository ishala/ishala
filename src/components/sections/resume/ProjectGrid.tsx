import { BodyText } from '@/components/primitives/BodyText';
import { Card } from '@/components/primitives/Card';
import { ExternalLink } from '@/components/primitives/ExternalLink';
import { Heading } from '@/components/primitives/Heading';
import { projects } from '@/data/resume';

export function ProjectGrid() {
  return (
    <ul className="grid gap-16 md:grid-cols-2">
      {projects.map((project) => (
        <Card as="li" key={project.title} className="flex flex-col gap-16">
          <Heading as="h3" size="sm">
            {/* Proyek tanpa URL tetap kartu biasa, bukan tautan kosong seperti di situs lama */}
            {project.url ? (
              <ExternalLink href={project.url}>{project.title}</ExternalLink>
            ) : (
              project.title
            )}
          </Heading>

          <BodyText>{project.description}</BodyText>
        </Card>
      ))}
    </ul>
  );
}
