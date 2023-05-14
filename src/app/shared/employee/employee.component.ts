import {Component, OnDestroy, OnInit} from '@angular/core';
import {Employee, EmployeeInterface} from "../../network/models/employee";
import {EmployeeService} from "../../network/services/employee-service.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Task, TasksList} from "../../network/models/task";
import {ProjectService} from "../../network/services/project.service";
import {combineLatest, EMPTY, first, forkJoin, Observable, Subject, takeUntil} from "rxjs";
import {Project} from "../../network/models/project";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  public employee: Employee | undefined = undefined;
  public fromUrl!: string;
  private destroy$ = new Subject<void>();

  constructor(private employeeService: EmployeeService, private projectService: ProjectService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  private loadData() {
    // https://stackoverflow.com/questions/41797439/rxjs-observable-combinelatest-vs-observable-forkjoin

    combineLatest([
      this.activatedRoute.queryParams,
      this.activatedRoute.params,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ([queryParams, params]) => {
          this.fromUrl = queryParams['from'] ?? '/web-app/project-manager/projects';
          const projectId = queryParams['project_id'] ?? -1;
          const employeeId = params['id'];

          let joinSources: Observable<any>[] = [this.employeeService.getEmployee(employeeId)];
          if (projectId != -1) joinSources.push(this.projectService.getProject(projectId));

          forkJoin(joinSources)
            .pipe(first())
            .subscribe({
            next: ([employee, project]) => {
              if (project) {
                let projectObj = Project.fromJSON(project);
                employee.tasks = projectObj.getEmployeeTasks(employee);
              }

              this.employee = new Employee(employee);
            },
            error: (err) => {
              console.error(err);
              this.router.navigateByUrl(this.fromUrl);
            }
          })
        },
        error: (err) => {
          console.error(err);
          this.router.navigateByUrl(this.fromUrl);
        }
      });
  }

  ngOnInit() {
    this.loadData()
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onTaskModify($event: Task) {
    if (this.employee) {
      this.employee.tasks = this.employee?.tasks?.tasksListMap(task => {
        if (task.id === $event.id) {
          return $event;
        }
        return task;
      });
    }
  }
}
