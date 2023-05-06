import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ErrorLoggerService {

  constructor(private snackbar: MatSnackBar) { }

  logError(error: any) {
    this.snackbar.open(error.message, 'OK', {
      duration: 5000
    });
  }
}
