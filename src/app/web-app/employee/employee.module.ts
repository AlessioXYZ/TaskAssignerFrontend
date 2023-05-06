import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import {SharedModule} from "../../shared/shared.module";
import {NavbarComponent} from "./navbar/navbar.component";


@NgModule({
  declarations: [
    EmployeeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
  ]
})
export class EmployeeModule { }
