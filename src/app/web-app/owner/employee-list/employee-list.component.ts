import {Component, Input} from '@angular/core';
import {Employee} from "../../../network/models/employee";
import {EmployeeService} from "../../../network/services/employee-service/employee-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent {
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private _router: Router) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe({
      next: (employees: Employee[]) => {
        console.log(employees);
        this.employees = employees;
      },
    });
  }
}
