import fs from "fs";
import path from "path";

export interface WorkExperience {
    company: string;
    title: string;
    logo: string;
    start: string;
    end: string | { label: string };
    description?: string | string[];
    location?: string;
    skills: string[];
}


export interface AboutData {
    fullName: string;
    shortName: string;
    headline: string;
    linkedIn: string;
    intro: string;
    intro_alt: string;
    shortBio: string[];
    shortBioI: string[];
    bio: string[];
    mojo: string;
    mailto: string;
    workExperience: WorkExperience[];
}

const dataPath = path.join(process.cwd(), "data");

export const getAboutData = (): AboutData => {
    const fullPath = path.join(dataPath, "about.json");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(fileContents);
};
