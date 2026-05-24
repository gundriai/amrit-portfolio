export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  thumbnail: string;
  tags: string[];
  featured?: boolean;
}

export type ProjectCategory =
  | "Sports"
  | "Cinematic"
  | "Commercial"
  | "Reels"
  | "YouTube"
  | "Motion Graphics";

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
