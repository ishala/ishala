import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Resume } from '@/components/sections/Resume';
import { useRevealObserver } from '@/lib/reveal';

export function App() {
  useRevealObserver();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
