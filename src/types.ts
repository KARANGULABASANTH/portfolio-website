/**
 * Portfolio Data Types and Interfaces
 * Centralized schema for student portfolio configuration
 */

export interface PersonalInfo {
  fullName: string;
  shortName: string;
  profilePhoto: string; // URL, path, or placeholder indicator
  currentRole: string;
  shortTagline: string;
  aboutMe: string;
  resumeUrl?: string; // Optional path or URL to resume PDF
}

export interface ContactInfo {
  phoneNumber: string;
  email: string;
  location: string;
}

export interface SocialProfiles {
  github: string;
  linkedin: string;
  hackerrank: string;
  leetcode: string;
  codechef: string;
  codeforces: string;
  otherProfiles?: {
    name: string;
    url: string;
    description?: string;
  }[];
}

export interface CurrentEducation {
  degree: string;
  branch: string;
  year: string;
  college: string;
  university: string;
  startYear: string;
  expectedGraduation: string;
  highlights?: string[];
}

export interface PreviousEducation {
  school10th: {
    name: string;
    board?: string;
    year?: string;
    score?: string;
  };
  intermediate12th: {
    name: string;
    stream?: string;
    board?: string;
    year?: string;
    score?: string;
  };
  otherAcademic?: {
    title: string;
    institution: string;
    year?: string;
    details?: string;
  }[];
}

export interface EducationInfo {
  current: CurrentEducation;
  previous: PreviousEducation;
}

export interface Certificate {
  id: string;
  name: string;
  issuingOrganization: string;
  date: string;
  certificateImageOrPdf?: string;
  certificateUrl?: string;
  credentialId?: string;
  scoreOrRank?: string;
  category?: string;
  badgeText?: string;
  description?: string;
}

export interface SkillsCategorized {
  programmingLanguages: string[];
  webTechnologies?: string[];
  databases?: string[];
  librariesFrameworks?: string[];
  developerTools?: string[];
  otherTechnicalSkills?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image?: string;
  dateOrYear?: string;
}

export interface LearningJourneyItem {
  phase: string;
  title: string;
  description: string;
}

export interface AboutDetails {
  introduction?: string;
  careerAspirations?: string;
  currentlyLearning?: string[];
  learningJourney?: LearningJourneyItem[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  aboutDetails?: AboutDetails;
  contact: ContactInfo;
  social: SocialProfiles;
  education: EducationInfo;
  certificates: Certificate[];
  interests: string[];
  skills: SkillsCategorized;
  projects: Project[];
}
