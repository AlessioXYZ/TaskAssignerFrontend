import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectManagerRoutingModule} from './project-manager-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './project/project.component';
import {TasksComponent} from './tasks/tasks.component';
import {ProjectManagerComponent} from './project-manager.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";
import { CreateTaskDialogComponent } from './tasks/create-task-dialog/create-task-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    NavbarComponent,
    ProjectsComponent,
    ProjectComponent,
    TasksComponent,
    ProjectManagerComponent,
    CreateTaskDialogComponent,
  ],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
})
export class ProjectManagerModule {
}
