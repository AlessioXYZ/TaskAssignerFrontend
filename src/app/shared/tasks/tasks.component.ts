import {Component} from '@angular/core';
import {TaskService} from "../../network/services/task.service";
import {Task, TasksList} from "../../network/models/task";
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskDialogComponent} from "./create-task-dialog/create-task-dialog.component";
import {ProjectManager} from "../../network/models/project_manager";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent {
  tasks!: TasksList;
  moduleType: string = '';

  constructor(private taskService: TaskService, private dialog: MatDialog, private activatedRoute: ActivatedRoute) {
  }


  private fetchTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = new TasksList(tasks);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  setModuleType() {
    this.moduleType = this.activatedRoute.snapshot.data['moduleType'];
  }

  ngOnInit() {
    this.fetchTasks();
    this.setModuleType();
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
    let dialog = this.dialog.open(CreateTaskDialogComponent, {
      width: '600px',
    });

    dialog.componentInstance.savedTask.subscribe((task: Task) => {
        this.tasks = new TasksList([...this.tasks, task]);
      }
    );
  }
}