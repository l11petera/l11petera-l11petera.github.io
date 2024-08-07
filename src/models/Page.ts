import Section from "./Section";

class Page {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  sections: Section[];

  constructor(
    id: number,
    title: string,
    subtitle: string,
    content: string,
    sections: Section[] = []
  ) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
    this.sections = sections;
  }
}

export default Page;
