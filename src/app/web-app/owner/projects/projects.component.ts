import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Project} from "../../../network/models/project";
import {ProjectService} from "../../../network/services/project.service";
import {CreateProjectDialogComponent} from "./handle-project/create-project-dialog/create-project-dialog.component";
import {EditProjectDialogComponent} from "./handle-project/edit-project-dialog/edit-project-dialog.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'company', 'project_manager', 'employees', 'edit', 'delete'];
  public projects: Project[] = [];

  constructor(private projectService: ProjectService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (projects: Project[]) => {
        this.projects = projects;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  openCreateDialog() {
    let dialog: MatDialogRef<CreateProjectDialogComponent> = this.dialog.open(CreateProjectDialogComponent, {width: '600px',});

    dialog.componentInstance.handledProject.subscribe((project: Project) => {
      this.projects = [...this.projects, project];
    });

    dialog.componentInstance.error.subscribe((error: any) => {
      console.log(error);
    });
  }

  openEditDialog(project: Project) {
    let dialog: MatDialogRef<EditProjectDialogComponent> = this.dialog.open(EditProjectDialogComponent, {width: '600px', data: {project}});

    dialog.componentInstance.handledProject.subscribe((project: Project) => {
      this.projects = this.projects.map((p: Project) => {
        if (p.id === project.id) {
          return project;
        }
        return p;
      });
    });

    dialog.componentInstance.error.subscribe((error: any) => {
      console.log(error);
    });
  }

  deleteProject(project: Project) {
    this.projectService.deleteProject(project.id).subscribe({
      next: () => {
        this.projects = this.projects.filter((p: Project) => p.id !== project.id);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
