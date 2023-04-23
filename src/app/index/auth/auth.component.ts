import {Component} from '@angular/core';
import {LoginForm} from "./forms/login-form";
import {RegistrationForm} from "./forms/registration-form";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [LoginForm, RegistrationForm]
})
export class AuthComponent {
  constructor(public loginForm: LoginForm, public registrationForm: RegistrationForm) {
  }
}
