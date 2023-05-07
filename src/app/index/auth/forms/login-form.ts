import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {UserService} from "../../../network/services/user-service.service";
import {Router} from "@angular/router";
import {UserInterface} from "../../../network/models/user";
import {UserFactoryService} from "../../../network/services/user-factory.service";
import {UserTypes} from "../../../network/services/abstract-user.service";
import {SetFormControlBackendErrorsService} from "../../../shared/set-form-control-backend-errors/set-form-control-backend-errors.service";
import {LoggerService} from "../../../shared/logger/logger.service";


@Injectable()
export class LoginForm {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _userService: UserService, private _router: Router, private userFactoryService: UserFactoryService, private logger: LoggerService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    if (this.form.valid) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      this._userService.login(this.username?.value, this.password?.value).subscribe({
        next: (user: UserInterface) => {
          localStorage.setItem('token', user.auth_token ?? "");
          localStorage.setItem('user', JSON.stringify(user));


          let userType = <UserTypes>user.type;
          let userObj = this.userFactoryService.getUserByType(userType);


          if (!user.has_changed_password) {
            this._router.navigate(['web-app/change-password']).then(r => r);
          } else {
            userObj?.redirect();
          }
        },
        error: (error) => {
          this.logger.log(error.error, error.status);

          SetFormControlBackendErrorsService.setBackendErrors(this.form, error.error);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
