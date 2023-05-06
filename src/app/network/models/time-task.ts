import {TaskInterface} from "./task";

export interface TimeTaskInterface {
  id?: number;
  task: number,
  employee?: number;
  minutes: number;
  note: string;
}
