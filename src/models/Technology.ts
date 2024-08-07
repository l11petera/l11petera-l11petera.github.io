class Technology {
  id: number;
  sub_service_id: number;
  name: string;

  constructor(id: number, sub_service_id: number, name: string) {
    this.id = id;
    this.sub_service_id = sub_service_id;
    this.name = name;
  }
}

export default Technology;
