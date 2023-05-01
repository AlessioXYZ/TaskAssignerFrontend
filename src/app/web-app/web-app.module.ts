import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WebAppRoutingModule} from './web-app-routing.module';
import {RouterModule} from "@angular/router";
import {OwnerModule} from "./owner/owner.module";
import {EmployeeModule} from "./employee/employee.module";
import {ProjectManagerModule} from "./project-manager/project-manager.module";
import {ListStyleComponent} from "./shared/list-style/list-style.component";

@NgModule({
  declarations: [
    ListStyleComponent
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    RouterModule,
    OwnerModule,
    EmployeeModule,
    ProjectManagerModule,
  ],
  exports: [
    ListStyleComponent
  ],
})
export class WebAppModule {
}
