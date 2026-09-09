import { Section } from '@/components/layout/Section';
import { Card } from '@/components/primitives/Card';
import { Heading } from '@/components/primitives/Heading';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { Reveal } from '@/components/primitives/Reveal';
import { SegmentedText } from '@/components/primitives/SegmentedText';
import { SparkleMark } from '@/components/primitives/SparkleMark';
import { StatementText } from '@/components/primitives/StatementText';
import { TechIcon } from '@/components/primitives/TechIcon';
import { about, aboutParagraphs, aboutTitle, sections, techIcons } from '@/data/profile';

export function About() {
  return (
    <Section id={sections.about.id} label={sections.about.label}>
      <div className="grid gap-32 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-80">
        {/* self-start supaya kartu setinggi fotonya, bukan meregang setinggi kolom teks */}
        <Reveal index={1} className="self-start">
          <Card className="overflow-hidden p-0">
            <img
              src={about.portraitSrc}
              alt={about.portraitAlt}
              width={about.portraitWidth}
              height={about.portraitHeight}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </Card>
        </Reveal>

        <div className="flex flex-col gap-32">
          <Reveal index={2} className="flex items-start gap-16">
            <SparkleMark />
            <Heading as="h3">
              <SegmentedText segments={aboutTitle} />
            </Heading>
          </Reveal>

          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={index} index={3 + index}>
              <StatementText className="max-w-none hyphens-auto md:text-justify">
                <SegmentedText segments={paragraph.segments} emphasis="strong" />
              </StatementText>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-80 flex flex-col gap-24">
        <Reveal index={1}>
          <MonoLabel as="p">{about.techLabel}</MonoLabel>
        </Reveal>
        <ul className="grid grid-cols-2 gap-16 md:grid-cols-4">
          {techIcons.map((icon, index) => (
            <Reveal as="li" key={icon.label} index={2 + index}>
              <TechIcon
                label={icon.label}
                src={icon.src}
                width={icon.width}
                height={icon.height}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
