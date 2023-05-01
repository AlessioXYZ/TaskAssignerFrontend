import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    FormErrorsComponent,
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
