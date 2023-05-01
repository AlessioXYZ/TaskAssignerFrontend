import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Router} from "@angular/router";


@Injectable()
export class CreateProjectManagerForm {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router) {
    this.form = this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
      },
      {validators: this.checkPasswords},
    );
  }

  get firstName() {
    return this.form.get('first_name');
  }

  get lastName() {
    return this.form.get('last_name');
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }


  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value

    return pass === confirmPass || !pass ? null : {notSame: true}
  }
}

