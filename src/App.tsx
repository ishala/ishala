import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Resume } from '@/components/sections/Resume';

export function App() {
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
