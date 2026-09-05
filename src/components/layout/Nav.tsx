import { Container } from '@/components/layout/Container';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { OutlinedButton } from '@/components/primitives/OutlinedButton';
import { navSections, profile, socialUrls } from '@/data/profile';

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-iron-edge bg-void-black/95 backdrop-blur">
      <Container>
        {/* Tanpa utility order: urutan DOM, urutan tab, dan urutan visual sama di semua lebar */}
        <nav aria-label="Main" className="flex flex-wrap items-center gap-x-32 gap-y-16 py-20">
          <a href="#page1" className="text-ice-white transition-colors hover:text-signal-orange">
            <MonoLabel>{profile.wordmark}</MonoLabel>
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

          <div className="ml-auto flex items-center gap-24 md:ml-0">
            <SocialLinks />
            <OutlinedButton href={socialUrls.WhatsApp} external>
              Get in touch
            </OutlinedButton>
          </div>
        </nav>
      </Container>
    </header>
  );
}
