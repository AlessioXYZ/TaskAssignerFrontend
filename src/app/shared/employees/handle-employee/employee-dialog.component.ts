import {Directive, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Project} from "../../../network/models/project";
import {EmployeeForm} from "./employee-form/employee-form";
import {EmployeeService} from "../../../network/services/employee-service.service";
import {EmployeeInterface} from "../../../network/models/employee";
import {Role} from "../../../network/models/role";
import {RoleService} from "../../../network/services/role.service";
import {first} from "rxjs";

export const componentDecoratorPreset = {
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.less'],
  providers: [EmployeeForm]
};

@Directive()
export abstract class EmployeeDialogComponent implements OnInit {
  abstract handleButtonText: string;

  roles: Role[] = [];

  @Output() handledEmployee = new EventEmitter<EmployeeInterface>();
  @Output() error = new EventEmitter<[string, EmployeeInterface]>();

  constructor(
    public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    public employeeForm: EmployeeForm,
    protected employeeService: EmployeeService,
    protected roleService: RoleService,
    @Inject(MAT_DIALOG_DATA) public data: { project: EmployeeInterface }
  ) {

  }

  ngOnInit() {
    this.setRoles();
  }

  protected setRoles() {
    this.roleService.getRoles()
      .pipe(first())
      .subscribe((roles: Role[]) => {
      this.roles = roles;
    });
  }

  protected formToEmployee(): EmployeeInterface {
    return {
      first_name: this.employeeForm.firstName?.value,
      last_name: this.employeeForm.lastName?.value,
      username: this.employeeForm.username?.value,
      email: this.employeeForm.email?.value,
      role: this.employeeForm.role?.value,
    }
  }

  abstract handleEmployee(): void;
}
