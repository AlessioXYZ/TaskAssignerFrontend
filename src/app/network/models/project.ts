import {Company} from "./company";
import {ProjectManager} from "./project_manager";
import {Employee} from "./employee";
import {Task} from "./task";


export interface ProjectInterface {
  id?: number;
  name: string;
  description: string;
  company?: Company;
  project_manager: ProjectManager | number;
  employees?: Employee[] | number[];
  tasks?: Task[];
  score?: number;
}

export class Project implements ProjectInterface {
  constructor(
    public name: string,
    public description: string,
    public project_manager: ProjectManager | number,
    public company?: Company,
    public employees?: Employee[] | number[],
    public tasks?: Task[],
    public id?: number,
    public score?: number
  ) {
  }

  get totalEstimatedMinutes(): number {
    if (!this.tasks || this.tasks.length === 0) {
      return 0;
    } else {
      return this.tasks.map((task: Task) => task.estimated_minutes).reduce((a, b) => a + b);
    }
  }

  get totalRealMinutes(): number {
    if (!this.tasks || this.tasks.length === 0) {
      return 0;
    } else {
      return this.tasks.map((task: Task) => task.real_minutes ?? 0).reduce((a, b) => a + b);
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
