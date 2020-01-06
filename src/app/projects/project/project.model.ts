export class Project {
  constructor(name: string, desc: string, skills: string[]) {
    this.name = name;
    this.description = desc;
    this.skillsUsed = skills;
  }

  name: string;
  description: string;
  skillsUsed: string[];
  imagePath: string;
}
