import {Component} from '@angular/core';
import {UserTypes} from "../../network/services/abstract-user.service";
import {AbstractSubmoduleWebAppComponent} from "../abstract-submodule-web-app-component";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.less'],
})
export class OwnerComponent extends AbstractSubmoduleWebAppComponent {
  rightUserType: UserTypes = UserTypes.OWNER;
}
