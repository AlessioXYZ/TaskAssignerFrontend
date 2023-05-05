import {Company} from "./company";
import {ProjectManager} from "./project_manager";
import {Employee, EmployeeInterface} from "./employee";
import {TaskInterface} from "./task";


export interface ProjectInterface {
  id?: number;
  name: string;
  description: string;
  company?: Company;
  project_manager: ProjectManager | number;
  employees?: EmployeeInterface[];
  tasks?: TaskInterface[];
  score?: number;
}

export class Project implements ProjectInterface {
  constructor(
    public name: string,
    public description: string,
    public project_manager: ProjectManager | number,
    public company?: Company,
    public employees?: EmployeeInterface[],
    public tasks?: TaskInterface[],
    public id?: number,
    public score?: number
  ) {
  }

  get totalEstimatedMinutes(): number {
    if (!this.tasks || this.tasks.length === 0) {
      return 0;
    } else {
      return this.tasks.map((task: TaskInterface) => task.estimated_minutes).reduce((a, b) => a + b);
    }
  }

  get totalRealMinutes(): number {
    if (!this.tasks || this.tasks.length === 0) {
      return 0;
    } else {
      return this.tasks.map((task: TaskInterface) => task.real_minutes ?? 0).reduce((a, b) => a + b);
    }
  }

  scoreToColor(): string {
    if (this.score !== undefined) {
      if (this.score < 50) {
        return 'red';
      } else if (this.score < 75) {
        return 'orange';
      } else {
        return 'green';
      }
    }

    return '';
  }

  getEmployeeTasks(employee: EmployeeInterface) {
    return this.tasks?.filter((task: TaskInterface) => task.employee === employee.id);
  }

  static fromJSON(json: ProjectInterface): Project {
    return new Project(
      json.name,
      json.description,
      json.project_manager,
      json.company,
      json.employees,
      json.tasks,
      json.id,
      json.score
    );
  }
}
