import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {NetworkService} from "../network.service";
import {EmployeeService} from "./employee-service.service";
import {AbstractUserService, UserTypes} from "./abstract-user.service";
import {OwnerService} from "./owner.service";
import {ProjectManagerService} from "./project-manager-service.service";

@Injectable({
  providedIn: 'root'
})
export class UserFactoryService {

  constructor(private _router: Router, protected networkService: NetworkService) {
  }

  getUserByType(type: UserTypes): AbstractUserService | undefined {
    if (type == UserTypes.EMPLOYEE) {
      return new EmployeeService(this._router, this.networkService);
    } else if (type == UserTypes.OWNER) {
      return new OwnerService(this._router, this.networkService);
    } else if (type == UserTypes.PROJECT_MANAGER) {
      return new ProjectManagerService(this._router, this.networkService);
    }

    return undefined
  }
}
