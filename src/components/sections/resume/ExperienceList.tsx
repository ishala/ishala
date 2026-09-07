import { Timeline } from '@/components/primitives/Timeline';
import { ExperienceItem } from '@/components/sections/resume/ExperienceItem';
import { experiences } from '@/data/resume';

export function ExperienceList() {
  return (
    <Timeline>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} experience={experience} />
      ))}
    </Timeline>
  );
}
