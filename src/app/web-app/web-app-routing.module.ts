import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanActivateToken} from "../auth/can-activate-token";
import {ChangePasswordComponent} from "./shared/change-password/change-password.component";

const routes: Routes = [
  {
    path: 'web-app',
    canActivate: [() => inject(CanActivateToken).canActivate()],

    providers: [CanActivateToken],
    children: [
      {path: 'employee', loadChildren: () => import('./employee/employee-routing.module').then(m => m.EmployeeRoutingModule)},
      {path: 'project_manager', loadChildren: () => import('./project-manager/project-manager-routing.module').then(m => m.ProjectManagerRoutingModule)},
      {path: 'owner', loadChildren: () => import('./owner/owner-routing.module').then(m => m.OwnerRoutingModule)},
      {path: 'change-password', component: ChangePasswordComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAppRoutingModule {
}
