import {Project} from "./project";

export interface TaskInterface {
  id?: number;
  name: string;
  description: string;
  estimated_minutes: number;
  real_minutes?: number;
  project: string;
  employee?: string;
  completed?: boolean;
  completed_date?: Date,
  inserted_date?: Date,
  due_date?: Date,
}

export class Task implements TaskInterface {
  id?: number;
  name: string;
  description: string;
  estimated_minutes: number;
  real_minutes?: number;
  project: string;
  employee?: string;
  completed?: boolean;
  completed_date?: Date
  inserted_date?: Date;
  due_date?: Date;

  constructor(task: TaskInterface) {
    this.id = task.id;
    this.name = task.name;
    this.description = task.description;
    this.estimated_minutes = task.estimated_minutes;
    this.real_minutes = task.real_minutes;
    this.project = task.project;
    this.employee = task.employee;
    this.completed = task.completed;
    this.completed_date = task.completed_date;
    this.inserted_date = task.inserted_date;
    this.due_date = task.due_date;
  }

  static jsonToTaskList(tasks: TaskInterface[]): Task[] {
    return tasks.map((task) => {
      return new Task(task);
    });
  }
}


export class TasksList extends Array<Task> {
  originalTasks: Task[] = [];

  constructor(tasks: Task[]) {
    super()

    if (tasks[Symbol.iterator]) {
      this.originalTasks = tasks;
      this.push(...tasks);
    }
  }

  tasksListMap(callbackfn: (value: Task, index: number, array: Task[]) => Task, thisArg?: any): TasksList {
    return new TasksList(this.map(callbackfn, thisArg));
  }

  get completed(): Task[] {
    return this.filter(task => task.completed) ?? [];
  }

  get pending(): Task[] {
    return this.filter(task => !task.completed) ?? [];
  }

  get recentCompleted(): Task[] {
    return this.completed.filter(task => task.completed_date && new Date(task.completed_date).getTime() > new Date().getTime() - 1000 * 60 * 60 * 24 * 3)
  }

  get onTime(): Task[] {
    return this.pending.filter(task => task.due_date && new Date(task.due_date).getTime() > new Date().getTime())
  }

  get overdue(): Task[] {
    return this.pending.filter(task => task.due_date && new Date(task.due_date).getTime() < new Date().getTime())
  }

  private clear() {
    this.splice(0, this.length);
  }

  taskFilter(filter: (task: Task) => boolean) {
    this.clear();
    this.push(...this.originalTasks.filter(filter));

    this.filter(filter);
  }

  static jsonToTaskList(tasks: TaskInterface[]): TasksList {
    return new TasksList(tasks.map((task) => {
      return new Task(task);
    }));
  }

}
