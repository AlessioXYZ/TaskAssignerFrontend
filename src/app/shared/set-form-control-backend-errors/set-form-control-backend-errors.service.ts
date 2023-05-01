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
      const formField = key.replace('_', '');
      const camelCaseFormField = formField.charAt(0).toLowerCase() + formField.slice(1);


      const formControl = form.get(camelCaseFormField);
      if (formControl) {
        formControl.setErrors({'backendErrors': errors[key]});
      }
    }
  }
}
