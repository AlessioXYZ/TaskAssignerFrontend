import {Injectable} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TimeReportForm {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router) {
    this.form = this.fb.group({
        minutes: ['', [Validators.required]],
        note: ['', [Validators.required]],
      },
    );
  }

  get minutes() {
    return this.form.get('minutes');
  }

  get note() {
    return this.form.get('note');
  }
}
