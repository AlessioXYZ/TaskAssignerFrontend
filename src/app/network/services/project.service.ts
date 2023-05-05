import {Injectable} from '@angular/core';
import {Project, ProjectInterface} from "../models/project";
import {NetworkService} from "../network.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private networkService: NetworkService) {
  }

  getProjects() {
    return this.networkService.get<ProjectInterface[]>('project/');
  }

  getProject(projectId: number) {
    return this.networkService.get<ProjectInterface>(`project/${projectId}/`);
  }

  createProject(project: ProjectInterface) {
    return this.networkService.post<ProjectInterface>('project/', project);
  }

  updateProject(id: number | undefined, project: ProjectInterface) {
    return this.networkService.put<ProjectInterface>(`project/${id}/`, project);
  }

  deleteProject(id: number | undefined) {
    return this.networkService.delete(`project/${id}/`);
  }


}
