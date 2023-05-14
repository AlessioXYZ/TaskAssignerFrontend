import {Component, Directive, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProjectManager} from "../../../../network/models/project_manager";
import {ProjectManagerService} from "../../../../network/services/project-manager-service.service";
import {EmployeeService} from "../../../../network/services/employee-service.service";
import {ProjectService} from "../../../../network/services/project.service";
import {Project, ProjectInterface} from "../../../../network/models/project";
import {ProjectForm} from "./project-form/project-form";
import {EmployeeInterface} from "../../../../network/models/employee";
import {LoggerService} from "../../../../shared/logger/logger.service";
import {first} from "rxjs";

@Directive()
export abstract class ProjectDialogComponent {
  projectManagers: ProjectManager[] = [];
  employees: EmployeeInterface[] = [];

  abstract handleButtonText: string;
  @Output() handledProject = new EventEmitter<ProjectInterface>();
  @Output() error = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    public projectForm: ProjectForm,
    protected projectManagerService: ProjectManagerService,
    protected employeeService: EmployeeService,
    protected projectService: ProjectService,
    protected logger: LoggerService,
    @Inject(MAT_DIALOG_DATA) public data: { project: ProjectInterface }
  ) {

  }


  ngOnInit() {
    this.setProjectManagersOptions();
    this.setEmployeesOptions();
  }

  setProjectManagersOptions() {
    this.projectManagerService.getProjectManagers()
      .pipe(first())
      .subscribe({
      next: (projectManagers: ProjectManager[]) => {
        this.projectManagers = projectManagers;
      },
      error: (error: any) => {
        this.logger.log(error, error.status);
      }
    })
  }

  setEmployeesOptions() {
    this.employeeService.getEmployees()
      .pipe(first())
      .subscribe({
      next: (employees: EmployeeInterface[]) => {
        this.employees = employees;
      },
      error: (error: any) => {
        this.logger.log(error, error.status);
      }
    })
  }

  formToProject(): ProjectInterface {
    return {
      name: this.projectForm.name?.value,
      description: this.projectForm.description?.value,
      project_manager: this.projectForm.projectManager?.value,
      employees: this.projectForm.employees?.value
    }
  }

  abstract handleProject(): void;
}
