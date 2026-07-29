export interface ResumePage {
  id: string;
  title: string;
  subtitle: string;
  summary?: string;
  body?: readonly string[];
  highlights?: readonly string[];
}

export interface WorkExperience {
  title: string;
  subtitle: string;
  body: readonly string[];
  link?: string;
  tags: readonly string[];
}

export interface ProjectItem {
  title: string;
  stack: readonly string[];
  body: readonly string[];
  links: readonly { label: string; href: string }[];
}

export interface ExtracurricularExperience {
  title: string;
  subtitle: string;
  link: string;
  tags: readonly string[];
}

export interface EducationDetails {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  focus: string;
}

export interface SkillsAndStack {
  languages: readonly string[];
  frontend: readonly string[];
  backendApis: readonly string[];
  cloudDatabases: readonly string[];
  developerTools: readonly string[];
}

export interface ResumeContent {
  resumePages: readonly ResumePage[];
  workExperiences: readonly WorkExperience[];
  projectItems: readonly ProjectItem[];
  extracurricularExperiences: readonly ExtracurricularExperience[];
  educationDetails: EducationDetails;
  skillsAndStack: SkillsAndStack;
}
