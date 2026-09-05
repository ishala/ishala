import { Container } from '@/components/layout/Container';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { socialLinks, profile } from '@/data/profile';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-iron-edge bg-void-black py-80">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-32">
          <ul className="flex flex-wrap items-center gap-x-32 gap-y-8">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ice-white transition-colors hover:text-signal-orange"
                >
                  <MonoLabel>{link.platform}</MonoLabel>
                </a>
              </li>
            ))}
          </ul>

          <MonoLabel as="p">
            &copy; {currentYear} {profile.fullName}
          </MonoLabel>
        </div>
      </Container>
    </footer>
  );
}
