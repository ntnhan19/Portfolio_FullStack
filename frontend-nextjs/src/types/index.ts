export interface Project {
  id: number;
  title: string;
  description: string;
  content: string;
  tech_stack: string;
  category: string;
  repo_url: string;
  demo_url: string;
  image_url?: string;
  
  // Các trường mới từ Backend
  metrics?: string;      // JSON string
  highlights?: string;   // Comma-separated string
  duration?: string;
  team_size?: string;
  
  created_at: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  type: string;
  date: string;
  url?: string;
  image_url?: string;
}

export interface Activity {
  id: number;
  name: string;
  role: string;
  description: string;
  image_url?: string;
  date: string;
}

export interface Profile {
  id: number;
  full_name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  cover_image: string;
  tags: string;
  date: string;
}