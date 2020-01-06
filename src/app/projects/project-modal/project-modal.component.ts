import { Project } from "./../project/project.model";
import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: "app-project-modal",
  templateUrl: "./project-modal.component.html",
  styleUrls: ["./project-modal.component.scss"]
})
export class ProjectModalComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;

  constructor(
    public dialogRef: MatDialogRef<Project>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit() {
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close("Pizza!");
  }
}
