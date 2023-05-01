import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {UserService} from "../../../network/services/user-service.service";
import {UserTypes} from "../../../network/services/abstract-user.service";
import {UserFactoryService} from "../../../network/services/user-factory.service";
import {User} from "../../../network/models/user";
import {SetFormControlBackendErrorsService} from "../../../shared/set-form-control-backend-errors/set-form-control-backend-errors.service";


@Injectable()
export class ChangePasswordForm {
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private userFactoryService: UserFactoryService) {
    this.form = this.fb.group({
        old_password: ['', Validators.required],
        new_password: ['', Validators.required],
        confirm_new_password: ['', Validators.required],
      },
      {validators: this.checkPasswords},
    );
  }

  get oldPassword() {
    return this.form.get('old_password');
  }

  get newPassword() {
    return this.form.get('new_password');
  }

  get confirmNewPassword() {
    return this.form.get('confirm_new_password');
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('new_password')?.value;
    let confirmPass = group.get('confirm_new_password')?.value

    return pass === confirmPass || !pass ? null : {notSame: "Le password non coincidono"}
  }

  changePassword() {
    return this.userService.changePassword(this.oldPassword?.value, this.newPassword?.value).subscribe({
      next: (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));

        let userType = <UserTypes>user.type;
        let userObj = this.userFactoryService.getUserByType(userType);
        userObj?.redirect();
      },
      error: (err) => {
        console.log(err.error)
        SetFormControlBackendErrorsService.setBackendErrors(this.form, err.error);
      }
    })
  }
}

