import { ReactElement } from "react";

// Define types for icons
type Icon = ReactElement

// Define types for links array
export type Links = {
    id: number;
    url: string;
    text: string;
    icon: Icon;
};


// Define types for skills array
export type Tools = {
    text: string;
    icon: Icon;
};

//define types  for the aboutPageData
// Define types for education
type Education = {
    degree: string;
    university: string;
    date: string;
};
// Define types for certifications
type Certification = {
    name: string;
    issuer: string;
    date: string;
    url: string;
};
// Define types for experience
type Experience = {
    company: string;
    position: string;
    date: string;
    description: string[];
};
//define types for skills in aboutPageData
type Skill = {
    name: string;
    description: string;
};

export type AboutPageData = {
    about: {
        description: string;
        education: Education;
    };
    certifications: Certification[];
    experience: Experience[];
    skills: Skill[];
    
}

//define types for projects array
// Define types for project tools

// Define types for projects
export type Project = {
    url: string;
    text: string;
    image: string;
    description: string;
    tools: Tools[];
};

