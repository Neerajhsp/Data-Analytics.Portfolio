export type ProjectCategory =
  | 'Power BI'
  | 'Python'
  | 'SQL'
  | 'Excel'
  | 'Machine Learning'
  | 'Dashboard'
  | 'Visualization'
  | 'Analytics'
  | 'Other';

export type ProjectStatus = 'Completed' | 'In Progress' | 'Coming Soon';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ProjectKPI {
  label: string;
  value: string;
}

export interface ProjectChartPoint {
  name: string;
  value: number;
  value2?: number;
}

export interface ProjectChart {
  title: string;
  type: 'bar' | 'line' | 'area' | 'pie';
  data: ProjectChartPoint[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  status: ProjectStatus;
  difficulty: Difficulty;
  date: string;
  shortDescription: string;
  longDescription: string;
  businessProblem: string;
  dataset: string;
  tools: string[];
  technologies: string[];
  features: string[];
  cleaningSteps: string[];
  analysisProcess: string[];
  visualizations: string[];
  insights: string[];
  recommendations: string[];
  challenges: string[];
  githubLink?: string;
  liveDemoLink?: string;
  dashboardLink?: string;
  notebookLink?: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  kpis: ProjectKPI[];
  charts: ProjectChart[];
  comingSoon?: boolean;
}

export type SkillCategory = 'Programming' | 'Excel' | 'Visualization' | 'Analytics' | 'Development';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0-100
  experience: string;
  icon: string;
}

export interface ToolItem {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  status: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  points: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: ProjectCategory;
  businessProblem: string;
  dataset: string;
  approach: string[];
  cleaning: string[];
  transformation: string[];
  analysis: string[];
  visualization: string[];
  insights: string[];
  recommendations: string[];
  futureImprovements: string[];
  thumbnail: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface SQLQueryShowcase {
  id: string;
  title: string;
  objective: string;
  query: string;
  explanation: string;
  result: string;
  optimizationNotes: string;
}

export interface NotebookShowcase {
  id: string;
  title: string;
  thumbnail: string;
  libraries: string[];
  chartsGenerated: string[];
  businessQuestions: string[];
  insights: string[];
  githubLink: string;
}

export interface BusinessInsight {
  id: string;
  title: string;
  metric: string;
  description: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
