import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OwnerComponent} from "./owner.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {ProjectManagersListComponent} from "./project-managers-list/project-managers-list.component";
import {ProjectsComponent} from "./projects/projects.component";

const routes: Routes = [
  {
    path: '',
    component: OwnerComponent,
    children: [
      {path: 'projects', component: ProjectsComponent},
      {path: 'employees', component: EmployeeListComponent},
      {path: 'project-managers', component: ProjectManagersListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule {
}
