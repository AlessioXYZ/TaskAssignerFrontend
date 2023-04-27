import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WebAppRoutingModule} from './web-app-routing.module';
import {RouterModule} from "@angular/router";
import {OwnerModule} from "./owner/owner.module";
import {EmployeeModule} from "./employee/employee.module";
import {ProjectManagerModule} from "./project-manager/project-manager.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    RouterModule,
    OwnerModule,
    EmployeeModule,
    ProjectManagerModule,
  ],
})
export class WebAppModule {
}
