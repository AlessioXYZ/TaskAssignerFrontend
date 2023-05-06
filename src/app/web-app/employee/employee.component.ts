import { Component } from '@angular/core';
import {UserTypes} from "../../network/services/abstract-user.service";
import {AbstractSubmoduleWebAppComponent} from "../abstract-submodule-web-app-component";

@Component({
  selector: 'app-employee',
  template: `
	  <app-list-style></app-list-style>

	  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class EmployeeComponent extends AbstractSubmoduleWebAppComponent {
  rightUserType: UserTypes = UserTypes.EMPLOYEE;
}
