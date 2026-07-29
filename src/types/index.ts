export interface ResumePage {
  id: string;
  title: string;
  subtitle: string;
  summary?: string;
  body?: string[];
  highlights?: string[];
}

export interface WorkExperience {
  title: string;
  subtitle: string;
  body: string[];
  link?: string;
  tags: string[];
}

export interface ProjectItem {
  title: string;
  stack: string[];
  body: string[];
  links: { label: string; href: string }[];
}

export interface ExtracurricularExperience {
  title: string;
  subtitle: string;
  link: string;
  tags: string[];
}

export interface EducationDetails {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  focus: string;
}

export interface SkillsAndStack {
  languages: string[];
  frontend: string[];
  backendApis: string[];
  cloudDatabases: string[];
  developerTools: string[];
}

export interface ResumeContent {
  resumePages: ResumePage[];
  workExperiences: WorkExperience[];
  projectItems: ProjectItem[];
  extracurricularExperiences: ExtracurricularExperience[];
  educationDetails: EducationDetails;
  skillsAndStack: SkillsAndStack;
}
