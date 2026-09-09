import { Section } from '@/components/layout/Section';
import { Display } from '@/components/primitives/Display';
import { ScrollIndicator } from '@/components/primitives/ScrollIndicator';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { Reveal } from '@/components/primitives/Reveal';
import { StatementText } from '@/components/primitives/StatementText';
import { hero, profile, sections } from '@/data/profile';

const heroHeadingId = 'hero-heading';

export function Hero() {
  return (
    <Section
      id={sections.introduction.id}
      label={sections.introduction.label}
      labelledBy={heroHeadingId}
    >
      <div className="flex flex-col gap-32">
        <Reveal index={1}>
          <MonoLabel as="p">{hero.label}</MonoLabel>
        </Reveal>

        <Reveal index={2}>
          <Display as="h1" id={heroHeadingId}>
            {/* {' '} load-bearing: tanpanya h1.textContent jadi "My Name IsMuhammad…" */}
            <span className="block">{hero.leadIn}</span>{' '}
            <span className="block text-electric-cobalt">{profile.fullName}</span>
          </Display>
        </Reveal>

        <Reveal index={3}>
          <StatementText>{hero.closing}</StatementText>
        </Reveal>

        <Reveal index={4} className="mt-100 self-start">
          <ScrollIndicator
            href={`#${sections.about.id}`}
            label={`Scroll to ${sections.about.label}`}
          />
        </Reveal>
      </div>
    </Section>
  );
}
