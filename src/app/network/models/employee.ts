import {User} from "./user";

export interface Employee extends User {
  role: string,
  score?: number,
}
