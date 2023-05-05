import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../network/services/project.service";
import {ProjectInterface} from "../../../network/models/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  public project!: ProjectInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let projectId = params['id'];

      this.projectService.getProject(projectId).subscribe({
        next: project => {
          this.project = project;
        },
        error: _ => {
          this.router.navigate(['web-app/project-manager/projects']).then(r => r);
        }
      })
    });
  }
}
