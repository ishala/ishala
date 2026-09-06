export type SocialPlatform = 'LinkedIn' | 'GitHub' | 'Instagram' | 'WhatsApp';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface TextSegment {
  text: string;
  emphasis?: boolean;
}

export interface Paragraph {
  segments: TextSegment[];
}

export interface TechIconItem {
  label: string;
  src: string;
  width: number;
  height: number;
}

export interface Course {
  name: string;
  period: string;
  description: string;
  certificateUrl?: string;
}

export interface Experience {
  title: string;
  organization?: string;
  period?: string;
  bullets: string[];
  courses?: Course[];
}

export interface Education {
  institution: string;
  major?: string;
  period: string;
}

export interface Certification {
  name: string;
  date: string;
  issuer: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  url?: string;
}
