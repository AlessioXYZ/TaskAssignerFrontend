import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LoginForm {
  form: FormGroup;
  http: HttpClient;

  constructor(private fb: FormBuilder, http: HttpClient) {
    this.http = http;
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
      this.http.post('http://localhost:8000/api/login', this.form.value).subscribe();
    }
    else {
      this.form.markAllAsTouched();
    }
  }
}
