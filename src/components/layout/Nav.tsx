import { useEffect, useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { navSections, profile, sections } from '@/data/profile';

export function Nav() {
  const headerRef = useRef<HTMLElement>(null);

  // Tingginya berubah saat item membungkus; hero membacanya agar lipatan berhenti tepat di bawah nav
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const publishHeight = () => {
      document.documentElement.style.setProperty('--nav-height', `${header.offsetHeight}px`);
    };

    publishHeight();
    const observer = new ResizeObserver(publishHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-10 border-b border-iron-edge bg-void-black/95 backdrop-blur"
    >
      <Container>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-x-32 gap-y-16 py-20">
          <a
            href={`#${sections.introduction.id}`}
            className="text-ice-white transition-colors hover:text-signal-orange"
          >
            <MonoLabel>{profile.fullName}</MonoLabel>
          </a>

          <ul className="flex w-full flex-wrap items-center gap-x-32 gap-y-8 md:ml-auto md:w-auto">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-ice-white transition-colors hover:text-signal-orange"
                >
                  <MonoLabel>{section.label}</MonoLabel>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-24 md:ml-auto lg:ml-0">
            <SocialLinks />
          </div>
        </nav>
      </Container>
    </header>
  );
}
