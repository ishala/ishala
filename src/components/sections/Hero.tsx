import { Section } from '@/components/layout/Section';
import { Display } from '@/components/primitives/Display';
import { ScrollIndicator } from '@/components/primitives/ScrollIndicator';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { StatementText } from '@/components/primitives/StatementText';
import { hero, profile, sections } from '@/data/profile';

const headingId = 'hero-heading';

export function Hero() {
  return (
    <Section
      id={sections.introduction.id}
      label={sections.introduction.label}
      headingId={headingId}
    >
      <div className="flex flex-col gap-32">
        <MonoLabel as="p">{hero.label}</MonoLabel>

        <Display as="h1" id={headingId}>
          {/* {' '} load-bearing: tanpanya h1.textContent jadi "My Name IsMuhammad…" */}
          <span className="block">{hero.leadIn}</span>{' '}
          <span className="block text-electric-cobalt">{profile.fullName}</span>
        </Display>

        <StatementText>{hero.closing}</StatementText>

        <ScrollIndicator
          href={`#${sections.about.id}`}
          label={`Scroll to ${sections.about.label}`}
          className="mt-100 self-start"
        />
      </div>
    </Section>
  );
}
