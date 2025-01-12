import { ReactElement } from "react";

// Define types for icons
type Icon = ReactElement;

// Define types for links array
export type Link = {
  id: number;
  url: string;
  text: string;
  icon: Icon;
};

// Define types for skills array
export type Tools = {
  text: string;
  icon: Icon;
  category?: "front-end"|"back-end"|"design"|"others"
};

//define types  for the aboutPageData
export type Education = {
  institution: string;
  degree: string;
  date: string;
};
export type About = {
  description: string[];
  education: Education;
};
// Define types for education
// Define types for certifications
export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
};
// export type CertificationsArray = Certification[]
// Define types for experience
export type Experience = {
  company: string;
  details:
    | {
        role: string;
        date: string;
        description: string[];
      }[];
  employmentType: string;
};
//define types for skills in aboutPageData
export type Skill = {
  name: string;
  description: string;

};

export type AboutPageData = {
  about: About;
  certifications: Certification[];
  experience: Experience[];
  skills: Skill[];
};

//define types for projects array
// Define types for project tools

// Define types for projects
export type Project = {
  url: string;
  gitUrl?: string;
  title: string;
  image: string;
  description: string;
  tools: Tools[];
};

export type Contact = {};
