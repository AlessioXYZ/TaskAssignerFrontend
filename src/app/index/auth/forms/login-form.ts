import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {UserService} from "../../../network/services/user-service/user-service.service";
import {Router} from "@angular/router";


@Injectable()
export class LoginForm {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _userService: UserService, private _router: Router) {
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
      this._userService.login(this.username?.value, this.password?.value).subscribe({
        next: (user) => {
          localStorage.setItem('token', user.auth_token ?? "");
          localStorage.setItem('user', JSON.stringify(user));

          let route = "";
          if(user.type === 'owner') {
            route = '/web-app/owner/';
          }
          else if(user.type === 'project-manager') {
            route = '/web-app/project-manager/';
          }
          else if(user.type === 'employee') {
            route = '/web-app/employee/';
          }

          this._router.navigate([route]).then(r => {});
        },
        error: (error) => {
          this.form.setErrors({backendError: error.error});
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
