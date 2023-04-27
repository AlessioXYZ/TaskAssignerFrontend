import {NgModule} from '@angular/core';

import {OwnerRoutingModule} from './owner-routing.module';
import {RouterModule} from "@angular/router";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {ProjectManagersListComponent} from "./project-managers-list/project-managers-list.component";
import {OwnerComponent} from "./owner.component";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from './navbar/navbar.component';
import {ProjectsComponent} from './projects/projects.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    EmployeeListComponent,
    ProjectManagersListComponent,
    OwnerComponent,
    NavbarComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OwnerRoutingModule,
    MatTableModule,
  ]
})
export class OwnerModule {
}
