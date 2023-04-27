import {Company} from "./company";

export interface User {
  id: number,
  username: string,
  email: string,
  type: string,
  company: Company,
  auth_token: string,
}
