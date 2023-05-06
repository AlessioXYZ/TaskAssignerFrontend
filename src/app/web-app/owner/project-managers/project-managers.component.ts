import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectManager} from "../../../network/models/project_manager";
import {ProjectManagerService} from "../../../network/services/project-manager-service.service";
import {CreateProjectManagerDialogComponent} from "./create-project-manager-dialog/create-project-manager-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoggerService} from "../../../shared/logger/logger.service";

@Component({
  selector: 'app-project-managers-list',
  templateUrl: './project-managers.component.html',
  styleUrls: ['./project-managers.component.less']
})
export class ProjectManagersComponent implements OnInit {
  public displayedColumns: string[] = ['first_name', 'last_name', 'username', 'email'];
  public projectManagers: ProjectManager[] = [];

  constructor(private employeeService: ProjectManagerService, private dialog: MatDialog, private logger: LoggerService
  ) {
  }

  ngOnInit() {
    this.employeeService.getProjectManagers().subscribe({
      next: (projectManagers: ProjectManager[]) => {
        this.projectManagers = projectManagers;
      },
    });
  }

  openCreateDialog() {
    let dialog: MatDialogRef<CreateProjectManagerDialogComponent> = this.dialog.open(CreateProjectManagerDialogComponent, {});

    dialog.componentInstance.savedProjectManager.subscribe((projectManager: ProjectManager) => {
        this.projectManagers = [...this.projectManagers, projectManager];
      }
    );

    dialog.componentInstance.error.subscribe((error: any) => {
      this.logger.log(error, "Errore generico", false);
    });
  }
}
