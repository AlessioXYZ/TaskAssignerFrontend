import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TaskInterface} from "../../../network/models/task";
import {TimeReportForm} from "./time-report-dialog-form";
import {TimeTaskService} from "../../../network/services/time-task-service.service";
import {TimeTaskInterface} from "../../../network/models/time-task";
import {ProjectInterface} from "../../../network/models/project";
import {LoggerService} from "../../logger/logger.service";
import {first} from "rxjs";

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './time-report-dialog.component.html',
  styleUrls: ['./time-report-dialog.component.css']
})
export class TimeReportDialogComponent {
  @Output() reportedTime = new EventEmitter<TimeTaskInterface>();
  @Output() error = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<TimeReportDialogComponent>,
    public timeReportForm: TimeReportForm,
    private snackBar: MatSnackBar,
    private timeTaskService: TimeTaskService,
    private logger: LoggerService,
    @Inject(MAT_DIALOG_DATA) public data: { task: TaskInterface }
  ) {
  }

  reportTime() {
    let timeTask: TimeTaskInterface = {
      task: this.data.task.id!,
      minutes: this.timeReportForm.minutes?.value,
      note: this.timeReportForm.note?.value,
    }

    if (this.timeReportForm.form.valid) {
      this.timeTaskService.createTimeTask(timeTask)
        .pipe(first())
        .subscribe({
        next: (task) => {
          this.dialogRef.close();
          this.timeReportForm.form.reset();

          this.snackBar.open('Tempo segnato con successo', 'Cancella', {});

          this.reportedTime.emit(task);
        },
        error: (error) => {
          this.snackBar.open('Errore durante la segnalazione del tempo', 'Chiudi', {});

          this.error.emit(error);
        }
      });
    }
  }
}

