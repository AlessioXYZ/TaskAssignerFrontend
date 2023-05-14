import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task, TaskInterface} from '../../network/models/task';
import {TaskService} from "../../network/services/task.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TimeReportDialogComponent} from "./time-report-dialog/time-report-dialog.component";
import {first} from "rxjs";


@Component({
  selector: 'app-task-expansion-panel',
  templateUrl: './task-expansion-panel.component.html',
  styleUrls: ['./task-expansion-panel.component.css']
})
export class TaskExpansionPanelComponent implements OnInit {
  @Input() task!: Task;
  @Output() onTaskModify = new EventEmitter<Task>();
  @Output() onTaskError = new EventEmitter<[string, Task]>();

  moduleType: string = '';

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) {

  }

  setModuleType() {
    this.moduleType = this.activatedRoute.snapshot.data['moduleType'];
  }

  isEmployee() {
    return this.moduleType === 'employee';
  }

  ngOnInit() {
    this.setModuleType();
  }

  private handleError(error: any) {
    this.onTaskError.emit([error.error, this.task]);
  }

  complete() {
    let taskCopy = new Task(this.task);
    taskCopy.complete();
    this.onTaskModify.emit(taskCopy);


    this.taskService.complete(this.task)
      .pipe(first())
      .subscribe({
        next: (task: TaskInterface) => {
          this.task = new Task(task);
        },
        error: (error: any) => {
          this.handleError(error);
        }
      });
  }

  reopen() {
    let taskCopy = new Task(this.task);

    taskCopy.reopen();
    this.onTaskModify.emit(taskCopy);

    this.taskService.reopen(this.task)
      .pipe(first())
      .subscribe({
        next: (task: TaskInterface) => {
          this.task = new Task(task);
        },
        error: (error: any) => {
          // TODO: Understand why it does not emit the value, if put outside it emits it
          this.onTaskError.emit(['Errore durante la riapertura della task', this.task]);
        }
      });
  }

  openTimeReportDialog() {
    let dialog = this.dialog.open(TimeReportDialogComponent, {
      width: '600px',
      data: {
        task: this.task
      }
    });

    dialog.componentInstance.reportedTime.subscribe((timeTask) => {
      if (this.task.real_minutes !== undefined) {
        this.task.real_minutes += timeTask.minutes;
      }
    });
  }
}
