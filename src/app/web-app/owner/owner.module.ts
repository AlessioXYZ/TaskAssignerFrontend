import {NgModule} from '@angular/core';

import {OwnerRoutingModule} from './owner-routing.module';
import {RouterModule} from "@angular/router";
import {OwnerComponent} from "./owner.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {NavbarComponent} from './navbar/navbar.component';
import {ProjectsComponent} from './projects/projects.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SharedModule} from "../../shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CreateProjectDialogComponent} from './projects/handle-project/create-project-dialog/create-project-dialog.component';
import {EditProjectDialogComponent} from './projects/handle-project/edit-project-dialog/edit-project-dialog.component';
import {ProjectManagersComponent} from "./project-managers/project-managers.component";
import {CreateProjectManagerDialogComponent} from "./project-managers/create-project-manager-dialog/create-project-manager-dialog.component";
import {CreateEmployeeDialog} from "../../shared/employees/handle-employee/create-employee-dialog/create-employee-dialog.component";

@NgModule({
  declarations: [
    ProjectManagersComponent,
    OwnerComponent,
    NavbarComponent,
    ProjectsComponent,
    CreateProjectManagerDialogComponent,
    CreateProjectDialogComponent,
    EditProjectDialogComponent,
    CreateEmployeeDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    OwnerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatSnackBarModule,
    SharedModule,
    MatInputModule,
    MatSelectModule,
    SharedModule
  ]
})
export class OwnerModule {
}
