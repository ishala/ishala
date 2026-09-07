import { BodyText } from '@/components/primitives/BodyText';
import { Card } from '@/components/primitives/Card';
import { ExternalLink } from '@/components/primitives/ExternalLink';
import { Heading } from '@/components/primitives/Heading';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import type { Course } from '@/types/content';

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <ul className="mt-8 grid gap-16 md:grid-cols-2">
      {courses.map((course) => (
        <Card
          as="li"
          // Dua course bernama sama hanya dibedakan periodenya
          key={course.name + course.period}
          className="flex flex-col gap-12 p-24"
        >
          <MonoLabel as="p">{course.period}</MonoLabel>

          <Heading as="h5" size="sm">
            {course.certificateUrl ? (
              <ExternalLink href={course.certificateUrl}>{course.name}</ExternalLink>
            ) : (
              course.name
            )}
          </Heading>

          <BodyText>{course.description}</BodyText>
        </Card>
      ))}
    </ul>
  );
}
