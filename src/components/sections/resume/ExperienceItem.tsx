import { BodyText } from '@/components/primitives/BodyText';
import { BulletList } from '@/components/primitives/BulletList';
import { Heading } from '@/components/primitives/Heading';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { TimelineItem } from '@/components/primitives/TimelineItem';
import { CourseGrid } from '@/components/sections/resume/CourseGrid';
import type { Experience } from '@/types/content';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <TimelineItem>
      {experience.period ? <MonoLabel as="p">{experience.period}</MonoLabel> : null}

      <Heading as="h4" size="sm">
        {experience.title}
      </Heading>

      {experience.organization ? <BodyText>{experience.organization}</BodyText> : null}

      <BulletList items={experience.bullets} />

      {experience.courses ? <CourseGrid courses={experience.courses} /> : null}
    </TimelineItem>
  );
}
