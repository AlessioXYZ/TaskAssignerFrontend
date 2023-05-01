import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {WebAppRoutingModule} from './web-app-routing.module';
import {RouterModule} from "@angular/router";
import {OwnerModule} from "./owner/owner.module";
import {EmployeeModule} from "./employee/employee.module";
import {ProjectManagerModule} from "./project-manager/project-manager.module";
import {ListStyleComponent} from "./shared/list-style/list-style.component";
import {ChangePasswordComponent} from "./shared/change-password/change-password.component";
import {IndexModule} from "../index/index.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ListStyleComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    RouterModule,
    OwnerModule,
    EmployeeModule,
    ProjectManagerModule,
    IndexModule,
    NgOptimizedImage,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    ListStyleComponent
  ],
})
export class WebAppModule {
}
