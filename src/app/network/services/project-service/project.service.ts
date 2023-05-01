import {Injectable} from '@angular/core';
import {Project} from "../../models/project";
import {NetworkService} from "../../network.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private networkService: NetworkService) {
  }

  getProjects() {
    return this.networkService.get<Project[]>('project/');
  }

  createProject(project: Project) {
    return this.networkService.post<Project>('project/', project);
  }

  updateProject(id: number | undefined, project: Project) {
    return this.networkService.put<Project>(`project/${id}/`, project);
  }

  deleteProject(id: number | undefined) {
    return this.networkService.delete(`project/${id}/`);
  }
}
