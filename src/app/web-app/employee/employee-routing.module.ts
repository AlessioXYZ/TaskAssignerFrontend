import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from "./employee.component";
import {TasksComponent} from "../../shared/tasks/tasks.component";

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {path: '', redirectTo: 'tasks', pathMatch: 'full'},
      {path: 'tasks', component: TasksComponent, data: {moduleType: 'employee'}},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
