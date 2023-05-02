import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { ProjectManagerComponent } from './project-manager.component';


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
    ProjectManagerRoutingModule
  ]
})
export class ProjectManagerModule { }
