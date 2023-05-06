import {User, UserInterface} from "./user";
import {Task, TasksList} from "./task";

export interface EmployeeInterface extends UserInterface {
  role: string,
  score?: number,
  tasks?: Task[],
}

export class Employee extends User implements EmployeeInterface {
  role: string;
  score?: number;
  tasks?: TasksList;

  constructor(employee: EmployeeInterface) {
    super(employee);

    this.role = employee.role;
    this.score = employee.score;

    if (employee.tasks) {
      this.tasks = new TasksList(employee.tasks);
    }
  }

  get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  static fromJsonList(jsonList: EmployeeInterface[]): Employee[] {
    return jsonList.map((json) => new Employee(json));
  }
}

