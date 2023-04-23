import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';


@Injectable()
export class RegistrationForm {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        company: this.fb.group({
          name: ['', Validators.required],
          vat: ['', Validators.required],
        }),
      },
      {validators: this.checkPasswords},
    );
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value

    return pass === confirmPass || !pass ? null : {notSame: true}
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get company() {
    return this.form.get('company');
  }

  get companyName() {
    return this.company?.get('name');
  }

  get companyVat() {
    return this.company?.get('vat');
  }


  onSubmit() {
    if (this.form.valid) {
      alert('Registrazione effettuata')
    } else {
      this.form.markAllAsTouched();
    }
  }
}
