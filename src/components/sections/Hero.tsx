import { Section } from '@/components/layout/Section';
import { Display } from '@/components/primitives/Display';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { ParticleField } from '@/components/primitives/ParticleField';
import { Reveal } from '@/components/primitives/Reveal';
import { ScrollIndicator } from '@/components/primitives/ScrollIndicator';
import { StatementText } from '@/components/primitives/StatementText';
import { hero, profile, sections } from '@/data/profile';

const heroHeadingId = 'hero-heading';

export function Hero() {
  return (
    <Section
      id={sections.introduction.id}
      label={sections.introduction.label}
      labelledBy={heroHeadingId}
      backdrop={<ParticleField />}
      className="flex min-h-hero flex-col justify-center"
    >
      <div className="flex flex-col gap-32">
        <Reveal index={1}>
          <MonoLabel as="p">{hero.label}</MonoLabel>
        </Reveal>

        <Reveal index={2}>
          <Display as="h1" id={heroHeadingId}>
            {/* {' '} load-bearing: tanpanya h1.textContent jadi "My Name IsMuhammad…" */}
            <span className="block">{hero.leadIn}</span>{' '}
            {/* Ice-white, bukan cobalt: teks cobalt di atas medan partikel cobalt jatuh ke 1,67:1 */}
            <span className="block">{profile.fullName}</span>
          </Display>
        </Reveal>

        <Reveal index={3}>
          <StatementText tone="bright">{hero.closing}</StatementText>
        </Reveal>
      </div>

      {/* Membentang seluruh section, bukan hanya pita bawahnya: observer reveal mengabaikan 12% terbawah viewport */}
      <Reveal
        index={4}
        className="pointer-events-none absolute inset-0 flex items-end justify-center pb-40"
      >
        <ScrollIndicator
          className="pointer-events-auto"
          href={`#${sections.about.id}`}
          label={`Scroll to ${sections.about.label}`}
        />
      </Reveal>
    </Section>
  );
}
