import {Injectable} from '@angular/core';
import {NetworkService} from "../network.service";
import {EmployeeInterface} from "../models/employee";
import {AbstractUserService} from "./abstract-user.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends AbstractUserService {
  redirectUrl: string = '/web-app/employee';

  getEmployees() {
    return this.networkService.get<EmployeeInterface[]>('employee/');
  }

  getEmployee(id: number) {
    return this.networkService.get<EmployeeInterface>('employee/' + id);
  }

  createEmployee(employee: EmployeeInterface) {
    return this.networkService.post<EmployeeInterface>('employee/', employee);
  }


}
