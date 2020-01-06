import { ProjectModalComponent } from "./project-modal/project-modal.component";
import { Component, OnInit } from "@angular/core";
import { Project } from "./project/project.model";
import { myProjects } from "./project/my-current-projects";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private dialog: MatDialog) {
    this.projects = myProjects;
  }
  openModal(project: Project) {
    let dialogRef = this.dialog.open(ProjectModalComponent, {
      height: "400px",
      width: "600px",
      data: {
        name: project.name,
        description: project.description
      }
    });
  }
  ngOnInit() {}
}
