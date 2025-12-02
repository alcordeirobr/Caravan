export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  content: string;
  rating: number;
  initial: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
  value: string;
  label: string;
}