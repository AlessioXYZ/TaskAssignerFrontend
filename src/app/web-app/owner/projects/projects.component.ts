import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Project, ProjectInterface} from "../../../network/models/project";
import {ProjectService} from "../../../network/services/project.service";
import {CreateProjectDialogComponent} from "./handle-project/create-project-dialog/create-project-dialog.component";
import {EditProjectDialogComponent} from "./handle-project/edit-project-dialog/edit-project-dialog.component";
import {LoggerService} from "../../../shared/logger/logger.service";
import {first, Subscription} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['name', 'project_manager', 'employees', 'edit', 'delete'];
  public projects: ProjectInterface[] = [];

  private handledProjectSub?: Subscription;
  private handledErrorSub?: Subscription;

  constructor(private projectService: ProjectService, private dialog: MatDialog, private logger: LoggerService) {
  }

  ngOnInit() {
    this.projectService.getProjects()
      .pipe(first())
      .subscribe({
      next: (projects: ProjectInterface[]) => {
        this.projects = projects;
      },
      error: (error: any) => {
        this.logger.log(error, error.status);
      }
    });
  }

  openCreateDialog() {
    let dialog: MatDialogRef<CreateProjectDialogComponent> = this.dialog.open(CreateProjectDialogComponent, {width: '600px',});

    this.handledProjectSub = dialog.componentInstance.handledProject.subscribe((project: ProjectInterface) => {
      this.projects = [...this.projects, project];
    });

    this.handledErrorSub = dialog.componentInstance.error.subscribe((error: any) => {
      this.logger.log(error, "Errore generico", false);
    });
  }

  openEditDialog(project: ProjectInterface) {
    let dialog: MatDialogRef<EditProjectDialogComponent> = this.dialog.open(EditProjectDialogComponent, {width: '600px', data: {project}});

    dialog.componentInstance.handledProject.subscribe((project: ProjectInterface) => {
      this.projects = this.projects.map((p: ProjectInterface) => {
        if (p.id === project.id) {
          return project;
        }
        return p;
      });
    });

    dialog.componentInstance.error.subscribe((error: any) => {
      this.logger.log(error, "Errore generico", false);
    });
  }

  deleteProject(project: ProjectInterface) {
    this.projectService.deleteProject(project.id)
      .pipe(first())
      .subscribe({
      next: () => {
        this.projects = this.projects.filter((p: ProjectInterface) => p.id !== project.id);
      },
      error: (error: any) => {
        this.logger.log(error, error.status);
      }
    });
  }

  ngOnDestroy() {
    this.handledProjectSub?.unsubscribe();
    this.handledErrorSub?.unsubscribe();
  }
}
