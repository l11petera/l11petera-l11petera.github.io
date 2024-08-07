import TeamMember from "./TeamMember";
import Service from "./Service";
import FAQ from "./FAQ";

class Section {
  id: number;
  page_id: number;
  title: string;
  content: string;
  team_members: TeamMember[];
  services: Service[];
  faqs: FAQ[];

  constructor(
    id: number,
    page_id: number,
    title: string,
    content: string,
    team_members: TeamMember[] = [],
    services: Service[] = [],
    faqs: FAQ[] = []
  ) {
    this.id = id;
    this.page_id = page_id;
    this.title = title;
    this.content = content;
    this.team_members = team_members;
    this.services = services;
    this.faqs = faqs;
  }
}

export default Section;
