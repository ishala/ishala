import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { Section } from '@/components/layout/Section';
import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Heading } from '@/components/primitives/Heading';
import { sections } from '@/data/profile';

const resumeHeadingId = 'resume-heading';

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />

        <Section
          id={sections.resume.id}
          label={sections.resume.label}
          headingId={resumeHeadingId}
        >
          <Heading as="h2" size="sm" id={resumeHeadingId}>
            {sections.resume.label}
          </Heading>
        </Section>
      </main>
      <Footer />
    </>
  );
}
