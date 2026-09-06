import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { MonoLabel } from '@/components/primitives/MonoLabel';
import { socialLinks } from '@/data/profile';
import type { SocialPlatform } from '@/types/content';
import { cn } from '@/lib/cn';

// lucide tidak punya glif merek WhatsApp, balon chat generik dipakai sebagai penggantinya
const iconByPlatform: Record<SocialPlatform, LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
  WhatsApp: MessageCircle,
};

type SocialLinksVariant = 'icon' | 'label';

interface SocialLinksProps {
  variant?: SocialLinksVariant;
  className?: string;
}

export function SocialLinks({ variant = 'icon', className }: SocialLinksProps) {
  const showIcon = variant === 'icon';

  return (
    <ul className={cn('flex flex-wrap items-center gap-x-16 gap-y-8', className)}>
      {socialLinks.map((link) => {
        const Icon = iconByPlatform[link.platform];

        return (
          <li key={link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              // Varian ikon tidak punya teks terlihat, jadi namanya harus datang dari aria-label
              aria-label={showIcon ? link.platform : undefined}
              className="flex items-center text-ice-white transition-colors hover:text-signal-orange"
            >
              {showIcon ? (
                <Icon className="size-16" aria-hidden="true" />
              ) : (
                <MonoLabel>{link.platform}</MonoLabel>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
