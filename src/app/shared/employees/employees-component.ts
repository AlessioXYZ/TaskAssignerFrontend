import {Component, OnInit} from '@angular/core';
import {EmployeeInterface} from "../../network/models/employee";
import {EmployeeService} from "../../network/services/employee-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateEmployeeDialog} from "./handle-employee/create-employee-dialog/create-employee-dialog.component";
import {LoggerService} from "../logger/logger.service";
import {first} from "rxjs";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employees-component.html',
  styleUrls: ['./employees-component.less']
})
export class EmployeesComponent implements OnInit {
  public displayedColumns: string[] = ['username', 'first_name', 'last_name', 'email', 'role', 'score', 'open'];
  public employees: EmployeeInterface[] = [];
  public redirectUrl: string = '';

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, public router: Router, private dialog: MatDialog, private logger: LoggerService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .pipe(first())
      .subscribe({
      next: (employees: EmployeeInterface[]) => {
        this.employees = employees;
      },
      error: (err) => {
        this.logger.log(err, err.status)
      }
    });

    this.activatedRoute.data
      .pipe(first())
      .subscribe((data: any) => {
      this.redirectUrl = data.employeeUrl;
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

    dialog.componentInstance.handledEmployee.subscribe((project: EmployeeInterface) => {
      this.employees = [...this.employees, project];
    });

    dialog.componentInstance.error.subscribe((error: any) => {
      this.logger.log(error, "Errore generico", false);
    });
  }
}
