import {Injectable} from '@angular/core';
import {NetworkService} from "../network.service";
import {Employee} from "../models/employee";
import {AbstractUserService} from "./abstract-user.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends AbstractUserService {
  redirectUrl: string = '/web-app/employee';

  getEmployees() {
    return this.networkService.get<Employee[]>('employee/');
  }

  createEmployee(employee: Employee) {
    return this.networkService.post<Employee>('employee/', employee);
  }


}
