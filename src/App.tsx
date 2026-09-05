import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { Section } from '@/components/layout/Section';
import { hero, about } from '@/data/profile';

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Section id="page1" label="Introduction">
          <p className="text-heading-sm leading-heading-sm tracking-heading-sm">{hero.leadIn}</p>
        </Section>

        <Section id="page2" label={about.label}>
          <p className="text-heading-sm leading-heading-sm tracking-heading-sm">
            {about.titleNeutral}
          </p>
        </Section>

        <Section id="page3" label="Resume">
          <p className="text-heading-sm leading-heading-sm tracking-heading-sm">Resume</p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
