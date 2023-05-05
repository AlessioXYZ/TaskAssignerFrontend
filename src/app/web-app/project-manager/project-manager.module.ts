import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectManagerRoutingModule} from './project-manager-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './project/project.component';
import {TasksComponent} from './tasks/tasks.component';
import {ProjectManagerComponent} from './project-manager.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {EmployeeComponent} from './employee/employee.component';
import {SharedModule} from "../../shared/shared.module";
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ProjectsComponent,
    ProjectComponent,
    TasksComponent,
    ProjectManagerComponent,
    EmployeeComponent,
    EmployeesComponent,
  ],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ],
})
export class ProjectManagerModule {
}
