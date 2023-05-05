import {Component} from '@angular/core';
import {TaskService} from "../../../network/services/task.service";
import {Task, TasksList} from "../../../network/models/task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent {
  tasks!: TasksList;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = new TasksList(tasks);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


  onTaskModify($event: Task) {
    // update the employee's tasks
    this.tasks = this.tasks?.tasksListMap(task => {
      if (task.id === $event.id) {
        return $event;
      }
      return task;
    });
  }

  openCreateDialog() {

  }
}
