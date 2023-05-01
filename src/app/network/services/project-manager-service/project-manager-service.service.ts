import {Injectable} from '@angular/core';
import {NetworkService} from "../../network.service";
import {ProjectManager} from "../../models/project_manager";

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  constructor(private networkService: NetworkService) {
  }

  getProjectManagers() {
    return this.networkService.get<ProjectManager[]>('project/project_manager/');
  }

  createProjectManager(projectManager: ProjectManager) {
    return this.networkService.post<ProjectManager>('project/project_manager/', projectManager);
  }
}
