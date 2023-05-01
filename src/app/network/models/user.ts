import {Company} from "./company";

export interface User {
  id?: number,
  username: string,
  password?: string,
  first_name: string,
  last_name: string,
  email: string,
  type?: string,
  company?: Company,
  auth_token?: string,
  has_changed_password?: boolean
}
