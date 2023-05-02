import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {NetworkService} from "../network.service";
import {EmployeeService} from "./employee-service.service";

export enum UserTypes {
  OWNER= "owner",
  EMPLOYEE = "employee",
  PROJECT_MANAGER = "project_manager",
}

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractUserService {
  abstract redirectUrl: string;

  constructor(private _router: Router, protected networkService: NetworkService) {
  }

  redirect() {
    this._router.navigate([this.redirectUrl]).then(r => r);
  }
}