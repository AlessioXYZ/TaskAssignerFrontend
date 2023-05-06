import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectManagerComponent} from "./project-manager.component";
import {ProjectsComponent} from "./projects/projects.component";
import {TasksComponent} from "../../shared/tasks/tasks.component";
import {ProjectComponent} from "./project/project.component";
import {EmployeeComponent} from "../../shared/employee/employee.component";
import {EmployeesComponent} from "../../shared/employees/employees-component";


const routes: Routes = [
  {
    path: '',
    component: ProjectManagerComponent,
    children: [
      {path: '', redirectTo: 'projects', pathMatch: 'full'},
      {path: 'projects', component: ProjectsComponent},
      {path: 'tasks', component: TasksComponent},
      {path: 'employees', component: EmployeesComponent, data: {'employeeUrl': '../employee'}},
      {path: 'project/:id', component: ProjectComponent},
      {path: 'employee/:id', component: EmployeeComponent},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagerRoutingModule {
}
