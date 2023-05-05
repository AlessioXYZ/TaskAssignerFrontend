import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {WebAppRoutingModule} from './web-app-routing.module';
import {RouterModule} from "@angular/router";
import {OwnerModule} from "./owner/owner.module";
import {ChangePasswordComponent} from "./shared/change-password/change-password.component";
import {IndexModule} from "../index/index.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {TaskExpansionPanelComponent} from '../shared/task-expansion-panel/task-expansion-panel.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {WebAppComponent} from './web-app.component';
import {ProjectManagerModule} from "./project-manager/project-manager.module";
import {ListStyleComponent} from "../shared/list-style/list-style.component";

@NgModule({
  declarations: [
    ChangePasswordComponent,
    WebAppComponent,
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    RouterModule,
    IndexModule,
    OwnerModule,
    ProjectManagerModule,
    NgOptimizedImage,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    SharedModule,
    MatExpansionModule,
    MatButtonModule,
    SharedModule,
  ],
})
export class WebAppModule {
}
