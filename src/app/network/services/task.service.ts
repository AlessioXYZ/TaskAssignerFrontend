import {Injectable} from '@angular/core';
import {NetworkService} from "../network.service";
import {TaskInterface} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private networkService: NetworkService) {
  }

  getTasks() {
    return this.networkService.get<TaskInterface[]>('task/');
  }

  getTask(id: number) {
    return this.networkService.get<TaskInterface>(`task/${id}/`);
  }

  complete(task: TaskInterface) {
    return this.networkService.patch<TaskInterface>(`task/${task.id}/`, {
      completed_date: new Date()
    });
  }

  reopen(task: TaskInterface) {
    return this.networkService.patch<TaskInterface>(`task/${task.id}/`, {
      completed_date: null
    });
  }

  createTask(task: TaskInterface) {
    return this.networkService.post<TaskInterface>('task/', task);
  }
}
