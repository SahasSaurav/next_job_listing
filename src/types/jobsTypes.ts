export type role = "Frontend" | "Fullstack" | "Backend";
export type level = "Senior" | "Junior" | "Midweight";
export type contract = "Full Time" | "Part Time" | "Contract";
export type language = "HTML" | "CSS" | "JavaScript" | "Python" | "Ruby";
export type tool = "React" | "Sass" | "Ruby" | "RoR" | "Vue" | "Django";

export interface jobType {
  id: number,
  company: String,
  logo: String,
  new: boolean,
  featured: Boolean,
  position: String,
  role: role,
  level: level,
  postedAt: String,
  contract: contract
  location: string,
  languages: language[],
  tools: tool[]
}
