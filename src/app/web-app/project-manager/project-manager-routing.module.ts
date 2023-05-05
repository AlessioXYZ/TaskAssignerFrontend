import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectManagerComponent} from "./project-manager.component";
import {ProjectsComponent} from "./projects/projects.component";
import {TasksComponent} from "./tasks/tasks.component";
import {ProjectComponent} from "./project/project.component";
import {EmployeeComponent} from "./employee/employee.component";


const routes: Routes = [
  {
    path: '',
    component: ProjectManagerComponent,
    children: [
      {path: '', redirectTo: 'projects', pathMatch: 'full'},
      {path: 'projects', component: ProjectsComponent},
      {path: 'tasks', component: TasksComponent},
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
