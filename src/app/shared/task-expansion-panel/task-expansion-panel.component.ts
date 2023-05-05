import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../network/models/task';
import {TaskService} from "../../network/services/task.service";


@Component({
  selector: 'app-task-expansion-panel',
  templateUrl: './task-expansion-panel.component.html',
  styleUrls: ['./task-expansion-panel.component.css']
})
export class TaskExpansionPanelComponent {
  @Input() task!: Task;
  @Output() onTaskModify = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {

  }

  complete() {
    this.taskService.complete(this.task).subscribe({
      next: (task: Task) => {
        this.onTaskModify.emit(task);
        this.task = task;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  reopen() {
    this.taskService.reopen(this.task).subscribe({
      next: (task: Task) => {
        this.onTaskModify.emit(task);
        this.task = task;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
