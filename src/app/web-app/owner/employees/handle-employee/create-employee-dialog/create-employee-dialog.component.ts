import {Component} from '@angular/core';
import {componentDecoratorPreset, EmployeeDialogComponent} from "../employee-dialog.component";
import {EmployeeForm} from "../employee-form/employee-form";
import {SetFormControlBackendErrorsService} from "../../../../../shared/set-form-control-backend-errors/set-form-control-backend-errors.service";


@Component({
  selector: 'app-create-project-dialog',
  templateUrl: '../employee-dialog.component.html',
  styleUrls: ['../employee-dialog.component.less'],
  providers: [EmployeeForm]
})
export class CreateEmployeeDialog extends EmployeeDialogComponent {
  handleButtonText = 'Crea';

  handleEmployee(): void {
    if (!this.employeeForm.form.valid) {
      this.employeeForm.form.markAllAsTouched();
      return;
    }

    this.employeeService.createEmployee(this.formToEmployee()).subscribe({
      next: (project: any) => {
        this.handledEmployee.emit(project);

        this.dialogRef.close();
      },
      error: (error: any) => {
        this.error.emit(error);


        SetFormControlBackendErrorsService.setBackendErrors(this.employeeForm.form, error.error);
      }
    })
  }
}
