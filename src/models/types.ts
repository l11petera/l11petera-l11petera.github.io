import Page from "./Page";

export interface PageData {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  sections: SectionData[];
}

export interface SectionData {
  id: number;
  page_id: number;
  title: string;
  content: string;
  team_members: TeamMemberData[];
  services: ServiceData[];
  faqs: FAQData[];
}

export interface TeamMemberData {
  id: number;
  section_id: number;
  name: string;
  position: string;
  photo_url: string;
  bio: string;
}

export interface ServiceData {
  id: number;
  section_id: number;
  title: string;
  description: string;
  sub_services: SubServiceData[];
}

export interface SubServiceData {
  id: number;
  service_id: number;
  title: string;
  description: string;
  technologies: TechnologyData[];
}

export interface TechnologyData {
  id: number;
  sub_service_id: number;
  name: string;
}

export interface FAQData {
  id: number;
  section_id: number;
  question: string;
  answer: string;
}
