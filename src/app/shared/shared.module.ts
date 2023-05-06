import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormErrorsComponent} from './form-errors/form-errors.component';
import {MatInputModule} from "@angular/material/input";
import {ListStyleComponent} from "./list-style/list-style.component";
import {TaskExpansionPanelComponent} from "./task-expansion-panel/task-expansion-panel.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {EmployeesComponent} from "./employees/employees-component";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {EmployeeComponent} from "./employee/employee.component";
import {RouterLink} from "@angular/router";
import {TasksComponent} from "./tasks/tasks.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {TimeReportDialogComponent} from "./task-expansion-panel/time-report-dialog/time-report-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FormErrorsComponent,
    ListStyleComponent,
    TaskExpansionPanelComponent,
    EmployeesComponent,
    EmployeeComponent,
    TasksComponent,
    TimeReportDialogComponent
  ],
  exports: [
    FormErrorsComponent,
    ListStyleComponent,
    TaskExpansionPanelComponent,
    EmployeesComponent,
    EmployeeComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    RouterLink,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
