import {Component} from '@angular/core';
import {TaskService} from "../../network/services/task.service";
import {Task, TasksList} from "../../network/models/task";
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskDialogComponent} from "./create-task-dialog/create-task-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {LoggerService} from "../logger/logger.service";
import {ProjectService} from "../../network/services/project.service";
import {ProjectInterface} from "../../network/models/project";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent {
  tasks!: TasksList;
  moduleType: string = '';
  searchTerm = '';
  projects: ProjectInterface[] = [];
  selectedProjects: ProjectInterface[] = [];

  constructor(private taskService: TaskService, private dialog: MatDialog, private activatedRoute: ActivatedRoute, private logger: LoggerService, private projectService: ProjectService) {
  }


  private fetchTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = new TasksList(tasks);
      },
      error: (error) => {
        this.logger.log(error, error.status);
      }
    })
  }

  private fetchProjects() {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        this.logger.log(error, error.status);
      }
    })
  }

  setModuleType() {
    this.moduleType = this.activatedRoute.snapshot.data['moduleType'];
  }

  ngOnInit() {
    this.fetchTasks();
    this.fetchProjects();
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

  filterTasks() {
    this.tasks.taskFilter(
      (task) => {
        let projectFilter = true;
        let searchFilter = true;

        if (this.selectedProjects.length > 0) {
          projectFilter = this.selectedProjects.some((project) => task.project === project.name);
        }
        if (this.searchTerm) {
          searchFilter = task.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || task.description.toLowerCase().includes(this.searchTerm.toLowerCase());
        }

        return projectFilter && searchFilter;

      }
    )
  }
}
