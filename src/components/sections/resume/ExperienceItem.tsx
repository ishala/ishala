import { BodyText } from '@/components/primitives/BodyText';
import { BulletList } from '@/components/primitives/BulletList';
import { Heading } from '@/components/primitives/Heading';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { TimelineItem } from '@/components/primitives/TimelineItem';
import { CourseList } from '@/components/sections/resume/CourseList';
import type { Experience } from '@/types/content';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <TimelineItem>
      {experience.period ? <MonoLabel as="p">{experience.period}</MonoLabel> : null}

      <Heading as="h3" size="sm">
        {experience.title}
      </Heading>

      {experience.organization ? <BodyText>{experience.organization}</BodyText> : null}

      <BulletList items={experience.bullets} />

      {experience.courses ? <CourseList courses={experience.courses} /> : null}
    </TimelineItem>
  );
}
