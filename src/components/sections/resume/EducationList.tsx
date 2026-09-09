import { BodyText } from '@/components/primitives/BodyText';
import { Heading } from '@/components/primitives/Heading';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { Timeline } from '@/components/primitives/Timeline';
import { TimelineItem } from '@/components/primitives/TimelineItem';
import { education } from '@/data/resume';
import { revealProps } from '@/lib/reveal';

export function EducationList() {
  return (
    <Timeline>
      {education.map((entry, index) => (
        <TimelineItem key={entry.institution} {...revealProps(index + 1)}>
          <MonoLabel as="p">{entry.period}</MonoLabel>

          <Heading as="h4" size="sm">
            {entry.institution}
          </Heading>

          {entry.major ? <BodyText>{entry.major}</BodyText> : null}
        </TimelineItem>
      ))}
    </Timeline>
  );
}
