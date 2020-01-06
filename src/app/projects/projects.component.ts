import { Component, OnInit } from "@angular/core";
import { Project } from "./project/project.model";
import { myProjects } from "./project/my-current-projects";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {
    this.projects = myProjects;
  }

  ngOnInit() {}
}
