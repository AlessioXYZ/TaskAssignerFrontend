import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';


@Injectable()
export class EmployeeForm {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
        role: ['', Validators.required],
      },
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

  get role() {
    return this.form.get('role');
  }
}

