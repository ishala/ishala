import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
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

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-16', className)}>
      {socialLinks.map((link) => {
        const Icon = iconByPlatform[link.platform];

        return (
          <li key={link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="block text-ice-white transition-colors hover:text-signal-orange"
            >
              <Icon className="size-16" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
