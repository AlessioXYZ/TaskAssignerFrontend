import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.css']
})
export class FormErrorsComponent {
  @Input() form: FormGroup | undefined = undefined;
  @Input() field = '';
  @Input() verboseName = '';

  private isValidError() {
    return this.form && this.form.get(this.field)
  }

  get errors() {
    if (this.isValidError()) {
      let errors = this.form?.get(this.field)?.errors;

      if (errors) {
        return Object.keys(errors).map(key => {
          if (errors) {
            if (key === 'required') {
              return `Campo obbligatorio`;
            }
            if (key === 'minlength') {
              return `${this.verboseName} deve avere almeno ${errors[key].requiredLength} caratteri`;
            }
            if (key === 'maxlength') {
              return `${this.verboseName} deve avere al massimo ${errors[key].requiredLength} caratteri`;
            }
            if (key === 'pattern') {
              return `${this.verboseName} non è valido`;
            }

            return errors[key];
          }
        });
      }
    }

    return null;
  }

  get isTouched() {
    if (this.isValidError()) {
      return this.form?.get(this.field)?.touched;
    }

    return null;
  }


}
