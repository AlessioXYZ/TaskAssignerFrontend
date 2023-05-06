import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../network/services/project.service";
import {Project, ProjectInterface} from "../../../network/models/project";
import {LoggerService} from "../../../shared/logger/logger.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'employees', 'tasks', 'total_estimated_minutes', 'total_real_minutes', 'score', 'go_to'];
  public projects: Project[] = [];

  constructor(private projectService: ProjectService, private logger: LoggerService) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (projects: ProjectInterface[]) => {
        this.projects = projects.map((project: ProjectInterface) => Project.fromJSON(project));
      },
      error: (error: any) => {
        this.logger.log(error, error.status);
      }
    });
  }
}
