import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormErrorsComponent} from './form-errors/form-errors.component';
import {MatInputModule} from "@angular/material/input";
import {ListStyleComponent} from "./list-style/list-style.component";
import {TaskExpansionPanelComponent} from "./task-expansion-panel/task-expansion-panel.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    FormErrorsComponent,
    ListStyleComponent,
    TaskExpansionPanelComponent
  ],
  exports: [
    FormErrorsComponent,
    ListStyleComponent,
    TaskExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
  ]
})
export class SharedModule {
}
