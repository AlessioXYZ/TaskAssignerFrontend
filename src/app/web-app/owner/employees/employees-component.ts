import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../network/models/employee";
import {EmployeeService} from "../../../network/services/employee-service.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateEmployeeDialog} from "./handle-employee/create-employee-dialog/create-employee-dialog.component";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employees-component.html',
  styleUrls: ['./employees-component.less']
})
export class EmployeesComponent implements OnInit {
  public displayedColumns: string[] = ['username', 'first_name', 'last_name', 'email', 'role', 'score'];
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private _router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe({
      next: (employees: Employee[]) => {
        this.employees = employees;
      },
    });
  }

  scoreToColor(score: number): string {
    if (score < 50) {
      return 'red';
    } else if (score < 75) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  addEmployee() {
    let dialog: MatDialogRef<CreateEmployeeDialog> = this.dialog.open(CreateEmployeeDialog, {width: '600px',});

    dialog.componentInstance.handledEmployee.subscribe((project: Employee) => {
      this.employees = [...this.employees, project];
    });

    dialog.componentInstance.error.subscribe((error: any) => {
      console.log(error);
    });
  }
}
