import {Injectable} from '@angular/core';
import {NetworkService} from "../network.service";
import {EmployeeInterface} from "../models/employee";
import {AbstractUserService} from "./abstract-user.service";
import {TimeTaskInterface} from "../models/time-task";

@Injectable({
  providedIn: 'root'
})
export class TimeTaskService {
  constructor(private networkService: NetworkService) {

  }

  createTimeTask(timeTask: TimeTaskInterface) {
    return this.networkService.post<TimeTaskInterface>('task/time/', timeTask);
  }
}
