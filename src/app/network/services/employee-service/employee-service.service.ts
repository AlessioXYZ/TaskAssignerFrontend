import {Injectable} from '@angular/core';
import {NetworkService} from "../../network.service";
import {Employee} from "../../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private networkService: NetworkService) {
  }

  getEmployees() {
    return this.networkService.get<Employee[]>('employee/');
  }

  createEmployee(employee: Employee) {
    return this.networkService.post<Employee>('employee/', employee);
  }
}
