import { BodyText } from '@/components/primitives/BodyText';
import { Heading } from '@/components/primitives/Heading';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { Timeline } from '@/components/primitives/Timeline';
import { TimelineItem } from '@/components/primitives/TimelineItem';
import { education } from '@/data/resume';

export function EducationList() {
  return (
    <Timeline>
      {education.map((entry) => (
        <TimelineItem key={entry.institution}>
          <MonoLabel as="p">{entry.period}</MonoLabel>

          <Heading as="h3" size="sm">
            {entry.institution}
          </Heading>

          {entry.major ? <BodyText>{entry.major}</BodyText> : null}
        </TimelineItem>
      ))}
    </Timeline>
  );
}
