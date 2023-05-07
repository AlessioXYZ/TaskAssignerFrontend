import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SetFormControlBackendErrorsService {
  constructor() {
  }

  static setBackendErrors(form: FormGroup, errors: any[]) {
    for (const key in errors) {
      const formControl = form.get(key);
      if (formControl) {
        formControl.setErrors({'backendErrors': errors[key]});
      }
    }
  }
}
