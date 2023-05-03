import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../network/services/project.service";
import {Project, ProjectInterface} from "../../../network/models/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'employees', 'tasks', 'total_estimated_minutes', 'total_real_minutes', 'score', 'go_to'];
  public projects: Project[] = [];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (projects: ProjectInterface[]) => {
        this.projects = projects.map((project: ProjectInterface) => Project.fromJSON(project));
        console.log(this.projects);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
