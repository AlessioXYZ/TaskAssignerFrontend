import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {UserService} from "../../../network/services/user-service.service";
import {UserInterface} from "../../../network/models/user";
import {Company} from "../../../network/models/company";
import {LoggerService} from "../../../shared/logger/logger.service";
import {UserTypes} from "../../../network/services/abstract-user.service";
import {UserFactoryService} from "../../../network/services/user-factory.service";
import {Router} from "@angular/router";
import {SetFormControlBackendErrorsService} from "../../../shared/set-form-control-backend-errors/set-form-control-backend-errors.service";
import {first} from "rxjs";


@Injectable()
export class RegistrationForm {
  form: FormGroup;

  constructor(
    private fb: FormBuilder, private userService: UserService,
    private logger: LoggerService, private userFactoryService: UserFactoryService,
    private router: Router,
  ) {
    this.form = this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        company_name: ['', Validators.required],
        company_vat_number: ['', Validators.required],
      },
      {validators: this.checkPasswords},
    );
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value

    return pass === confirmPass || !pass ? null : {notSame: true}
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
    return this.form.get('company_name');
  }

  get companyVat() {
    return this.form.get('company_vat_number');
  }


  onSubmit() {
    if (this.form.valid) {
      let user: UserInterface = {
        first_name: this.firstName?.value,
        last_name: this.lastName?.value,
        username: this.username?.value,
        email: this.email?.value,
        password: this.password?.value,
      }
      let company: Company = {
        name: this.companyName?.value,
        vat_number: this.companyVat?.value,
      }

      this.userService.register(user, company)
        .pipe(first())
        .subscribe({
          next: (user) => {
            localStorage.setItem('token', user.auth_token ?? "");
            localStorage.setItem('user', JSON.stringify(user));

            let userType = <UserTypes>user.type;
            let userObj = this.userFactoryService.getUserByType(userType);


            if (!user.has_changed_password) {
              this.router.navigate(['web-app/change-password']).then(r => r);
            } else {
              userObj?.redirect();
            }
          },
          error: (error) => {
            this.logger.log(error.error);

            SetFormControlBackendErrorsService.setBackendErrors(this.form, error.error);
          }
        }
      )
    } else {
      this.form.markAllAsTouched();
    }
  }
}
