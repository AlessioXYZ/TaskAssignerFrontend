import {Component, OnInit} from '@angular/core';
import {ChangePasswordForm} from "./change-password-form";
import {UserTypes} from "../../../network/services/abstract-user.service";
import {UserFactoryService} from "../../../network/services/user-factory.service";
import {User} from "../../../network/models/user";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less'],
  providers: [ChangePasswordForm]
})
export class ChangePasswordComponent implements OnInit {
  constructor(public changePasswordForm: ChangePasswordForm, private userFactoryService: UserFactoryService) {
  }

  ngOnInit(): void {
    let user: User = JSON.parse(localStorage.getItem('user') || '{}');
    let userType = <UserTypes>user.type;
    let userObj = this.userFactoryService?.getUserByType(userType);

    if (user.has_changed_password && userObj) {
      userObj.redirect();
    }
  }
}
