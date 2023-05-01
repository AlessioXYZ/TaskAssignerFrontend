import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OwnerComponent} from "./owner.component";
import {ProjectsComponent} from "./projects/projects.component";
import {EmployeesComponent} from "./employees/employees-component";
import {ProjectManagersComponent} from "./project-managers/project-managers.component";

const routes: Routes = [
  {
    path: '',
    component: OwnerComponent,
    children: [
      {path: '', redirectTo: 'employees', pathMatch: 'full'},
      {path: 'projects', component: ProjectsComponent},
      {path: 'employees', component: EmployeesComponent},
      {path: 'project-managers', component: ProjectManagersComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule {
}
