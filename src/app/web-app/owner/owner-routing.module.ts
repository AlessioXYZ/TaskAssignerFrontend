import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OwnerComponent} from "./owner.component";
import {ProjectsComponent} from "./projects/projects.component";
import {EmployeesComponent} from "../../shared/employees/employees-component";
import {ProjectManagersComponent} from "./project-managers/project-managers.component";
import {EmployeeComponent} from "../../shared/employee/employee.component";

const routes: Routes = [
  {
    path: '',
    component: OwnerComponent,
    children: [
      {path: '', redirectTo: 'employees', pathMatch: 'full'},
      {path: 'projects', component: ProjectsComponent},
      {path: 'employees', component: EmployeesComponent, data: {employeeUrl: '../employee'}},
      {path: 'project-managers', component: ProjectManagersComponent},
      {path: 'employee/:id', component: EmployeeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule {
}
