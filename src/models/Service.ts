import SubService from "./SubService";

class Service {
  id: number;
  section_id: number;
  title: string;
  description: string;
  sub_services: SubService[];

  constructor(
    id: number,
    section_id: number,
    title: string,
    description: string,
    sub_services: SubService[] = []
  ) {
    this.id = id;
    this.section_id = section_id;
    this.title = title;
    this.description = description;
    this.sub_services = sub_services;
  }
}

export default Service;
