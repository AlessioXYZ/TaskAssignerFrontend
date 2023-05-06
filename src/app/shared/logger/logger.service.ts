import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private snackbar: MatSnackBar) {
  }

  log(error: any, errorCode: string = 'generico', snackBar = true) {
    let errorMessage = `Errore ${errorCode}: Impossibile completare l'azione.`;

    console.log(errorMessage, error);

    if (snackBar) {
      this.snackbar.open(errorMessage, 'OK', {
        duration: 5000
      });
    }
  }
}
