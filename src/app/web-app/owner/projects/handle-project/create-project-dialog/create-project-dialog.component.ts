import {Component} from '@angular/core';
import {ProjectDialogComponent} from "../project-dialog.component";
import {ProjectForm} from "../project-form/project-form";
import {SetFormControlBackendErrorsService} from "../../../../../shared/set-form-control-backend-errors/set-form-control-backend-errors.service";
import {first} from "rxjs";


@Component({
  selector: 'app-create-project-dialog',
  templateUrl: '../project-dialog.component.html',
  styleUrls: ['../project-dialog.component.less'],
  providers: [ProjectForm]
})
export class CreateProjectDialogComponent extends ProjectDialogComponent {
  handleButtonText = 'Crea';

  handleProject(): void {
    if (!this.projectForm.form.valid) {
      this.projectForm.form.markAllAsTouched();
      this.projectForm.form.setErrors({'backendErrors': null});
      return;
    }

    this.projectService.createProject(this.formToProject())
      .pipe(first())
      .subscribe({
      next: (project: any) => {
        this.handledProject.emit(project);

        this.dialogRef.close();
      },
      error: (error: any) => {
        this.error.emit(error);

        this.logger.log(error, error.status);

        SetFormControlBackendErrorsService.setBackendErrors(this.projectForm.form, error.error);
      }
    })
  }

}
