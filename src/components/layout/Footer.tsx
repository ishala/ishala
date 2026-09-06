import { Container } from '@/components/layout/Container';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { profile } from '@/data/profile';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-iron-edge bg-void-black py-80">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-32">
          <SocialLinks variant="label" className="gap-x-32" />

          <MonoLabel as="p">
            &copy; {currentYear} {profile.fullName}
          </MonoLabel>
        </div>
      </Container>
    </footer>
  );
}
