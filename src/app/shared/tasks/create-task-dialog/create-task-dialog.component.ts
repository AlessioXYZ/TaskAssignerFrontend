import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProjectManager} from "../../../network/models/project_manager";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CreateTaskForm} from "./create-task-form.service";
import {ProjectService} from "../../../network/services/project.service";
import {ProjectInterface} from "../../../network/models/project";
import {TaskInterface} from "../../../network/models/task";
import {TaskService} from "../../../network/services/task.service";
import {SetFormControlBackendErrorsService} from "../../set-form-control-backend-errors/set-form-control-backend-errors.service";
import {EmployeeService} from "../../../network/services/employee-service.service";
import {Employee} from "../../../network/models/employee";
import {LoggerService} from "../../logger/logger.service";

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.css']
})
export class CreateTaskDialogComponent implements OnInit {
  projects: ProjectInterface[] | undefined = [];
  employees: Employee[] | undefined = [];

  @Output() savedTask = new EventEmitter<TaskInterface>();
  @Output() error = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    public createTaskForm: CreateTaskForm,
    private projectService: ProjectService,
    private employeeService: EmployeeService,
    private taskService: TaskService,
    public snackBar: MatSnackBar,
    private logger: LoggerService
  ) {
  }

  fetchProjects() {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (err) => {
        this.logger.log(err, err.status);
      }
    })
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        this.employees = Employee.fromJsonList(employees);
      },
      error: (err) => {
        this.logger.log(err, err.status);
      }
    })
  }

  ngOnInit(): void {
    this.fetchProjects()
    this.fetchEmployees()
  }

  createTask() {
    if (this.createTaskForm.form.valid) {
      let task: TaskInterface = this.createTaskForm.form.value;

      this.taskService.createTask(task).subscribe({
        next: (task) => {
          this.savedTask.emit(task);

          this.createTaskForm.form.reset();
          this.snackBar.open("Task creato con successo", "Chiud", {});
          this.dialogRef.close();
        },
        error: (err) => {
          SetFormControlBackendErrorsService.setBackendErrors(this.createTaskForm.form, err.error);

          this.error.emit(err);
        }
      });

    } else {
      this.createTaskForm.form.markAllAsTouched();
    }
  }
}

