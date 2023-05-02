import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ProjectManagerService} from "../../../../network/services/project-manager-service.service";
import {ProjectManager} from "../../../../network/models/project_manager";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CreateProjectManagerForm} from "./create-project-manager-form/create-project-manager-form";
import {SetFormControlBackendErrorsService} from "../../../../shared/set-form-control-backend-errors/set-form-control-backend-errors.service";

@Component({
  selector: 'app-create-project-manager-dialog',
  templateUrl: './create-project-manager-dialog.component.html',
  styleUrls: ['./create-project-manager-dialog.component.css'],
  providers: [CreateProjectManagerForm]
})
export class  CreateProjectManagerDialogComponent {
  @Output() savedProjectManager = new EventEmitter<ProjectManager>();
  @Output() error = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<CreateProjectManagerDialogComponent>,
    private projectManagerService: ProjectManagerService,
    public createProjectManagerForm: CreateProjectManagerForm,
    public snackBar: MatSnackBar
  ) {
  }


  createProjectManager() {
    if (!this.createProjectManagerForm.form.valid) {
      this.createProjectManagerForm.form.markAllAsTouched();
      this.createProjectManagerForm.form.setErrors({'backendErrors': null});
      return;
    }

    this.projectManagerService.createProjectManager({
      "username": this.createProjectManagerForm.username?.value,
      "first_name": this.createProjectManagerForm.firstName?.value,
      "last_name": this.createProjectManagerForm.lastName?.value,
      "email": this.createProjectManagerForm.email?.value,
    }).subscribe({
      next: (projectManager: ProjectManager) => {
        this.savedProjectManager.emit(projectManager);
        this.snackBar.open('Project Manager creato con successo!', 'OK', {duration: 5000});

        this.dialogRef.close();
      },
      error: (error: any) => {
        this.error.emit(error);

        SetFormControlBackendErrorsService.setBackendErrors(this.createProjectManagerForm.form, error.error);
      }
    });
  }
}
