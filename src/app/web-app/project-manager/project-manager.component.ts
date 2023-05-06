import {Component} from '@angular/core';
import {AbstractSubmoduleWebAppComponent} from "../abstract-submodule-web-app-component";
import {UserTypes} from "../../network/services/abstract-user.service";

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.less']
})
export class ProjectManagerComponent extends AbstractSubmoduleWebAppComponent{
  rightUserType: UserTypes = UserTypes.PROJECT_MANAGER;
}
