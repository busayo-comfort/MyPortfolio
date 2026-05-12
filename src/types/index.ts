export type ProjectStatus = "completed" | "ongoing" | "archived";

export type Project = {
  slug: string;
  name: string;
  tagline: string;               

  problemStatement: string;      
  motivation: string;            
  whatItAchieves: string;        

  description: string;           
  learnings: string[];           

  status: ProjectStatus;
  isHighlight: boolean;          // True only for Contract Shield

  tech: string[];
  image: string;                 
  logo?: string;

  links: {
    github?: string;
    live?: string;
    demo?: string;
  };

  category: "fullstack" | "frontend" | "backend" | "ai" | "clone";
};