import Technology from "./Technology";

class SubService {
  id: number;
  service_id: number;
  title: string;
  description: string;
  technologies: Technology[];

  constructor(
    id: number,
    service_id: number,
    title: string,
    description: string,
    technologies: Technology[] = []
  ) {
    this.id = id;
    this.service_id = service_id;
    this.title = title;
    this.description = description;
    this.technologies = technologies;
  }
}

export default SubService;
