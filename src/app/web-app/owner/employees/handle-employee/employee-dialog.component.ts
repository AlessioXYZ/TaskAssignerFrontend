import {Directive, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Project} from "../../../../network/models/project";
import {EmployeeForm} from "./employee-form/employee-form";
import {EmployeeService} from "../../../../network/services/employee-service/employee-service.service";
import {Employee} from "../../../../network/models/employee";
import {Role} from "../../../../network/models/role";
import {RoleService} from "../../../../network/services/role-service/role.service";

export const componentDecoratorPreset = {
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.less'],
  providers: [EmployeeForm]
};

@Directive()
export abstract class EmployeeDialogComponent implements OnInit {
  abstract handleButtonText: string;

  roles: Role[] = [];

  @Output() handledEmployee = new EventEmitter<Employee>();
  @Output() error = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    public employeeForm: EmployeeForm,
    protected employeeService: EmployeeService,
    protected roleService: RoleService,
    @Inject(MAT_DIALOG_DATA) public data: { project: Employee }
  ) {

  }

  ngOnInit() {
    this.setRoles();
  }

  protected setRoles() {
    this.roleService.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles;
    });
  }

  protected formToEmployee(): Employee {
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
