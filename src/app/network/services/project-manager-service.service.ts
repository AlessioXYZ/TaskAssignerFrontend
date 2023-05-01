import {Injectable} from '@angular/core';
import {ProjectManager} from "../models/project_manager";
import {AbstractUserService} from "./abstract-user.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService extends AbstractUserService {
  redirectUrl: string = '/web-app/project-manager';

  getProjectManagers() {
    return this.networkService.get<ProjectManager[]>('project/project_manager/');
  }

  createProjectManager(projectManager: ProjectManager) {
    return this.networkService.post<ProjectManager>('project/project_manager/', projectManager);
  }
}
