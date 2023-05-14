import {Component} from '@angular/core';
import {componentDecoratorPreset, EmployeeDialogComponent} from "../employee-dialog.component";
import {EmployeeForm} from "../employee-form/employee-form";
import {SetFormControlBackendErrorsService} from "../../../set-form-control-backend-errors/set-form-control-backend-errors.service";
import {first} from "rxjs";
import {EmployeeInterface} from "../../../../network/models/employee";


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

      this.employeeForm.form.setErrors({'backendErrors': null});

      return;
    }

    let employee = this.formToEmployee();

    this.employeeService.createEmployee(employee)
      .pipe(first())
      .subscribe({
        next: (employee: EmployeeInterface) => {
          // this can't be done before the call (optimistic update) because there is a chance that the call fails (if the user inserts wrong data)

          this.handledEmployee.emit(employee)
          this.dialogRef.close();
        },
        error: (error: any) => {
          this.error.emit([error.error, employee]);


          SetFormControlBackendErrorsService.setBackendErrors(this.employeeForm.form, error.error);
        }
      })
  }
}
