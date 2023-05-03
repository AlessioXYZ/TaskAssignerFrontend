import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { ProjectManagerComponent } from './project-manager.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    NavbarComponent,
    ProjectsComponent,
    ProjectComponent,
    TasksComponent,
    TaskComponent,
    ProjectManagerComponent
  ],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ProjectManagerModule { }
