import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import {MatInputModule} from "@angular/material/input";
import { ChangePasswordComponent } from '../web-app/shared/change-password/change-password.component';



@NgModule({
  declarations: [
    FormErrorsComponent,
    ChangePasswordComponent
  ],
  exports: [
    FormErrorsComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class SharedModule { }
