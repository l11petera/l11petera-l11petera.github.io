class TeamMember {
  id: number;
  section_id: number;
  name: string;
  position: string;
  photo_url: string;
  bio: string;

  constructor(
    id: number,
    section_id: number,
    name: string,
    position: string,
    photo_url: string,
    bio: string
  ) {
    this.id = id;
    this.section_id = section_id;
    this.name = name;
    this.position = position;
    this.photo_url = photo_url;
    this.bio = bio;
  }
}

export default TeamMember;
