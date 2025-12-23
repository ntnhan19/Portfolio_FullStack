export interface Project {
    id: number;
    title: string;
    description: string;
    content: string; // Nội dung Markdown báo cáo
    tech_stack: string;
    category: string; // "Network Programming", "AI/LLM"...
    repo_url: string;
    demo_url: string;
    created_at: string;
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