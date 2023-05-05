import {Company} from "./company";

export interface UserInterface {
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

export class User implements UserInterface {
  id?: number;
  username: string;
  password?: string;
  first_name: string;
  last_name: string;
  email: string;
  type?: string;
  company?: Company;
  auth_token?: string;
  has_changed_password?: boolean;

  constructor(user: UserInterface) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.type = user.type;
    this.company = user.company;
    this.auth_token = user.auth_token;
    this.has_changed_password = user.has_changed_password;
  }
}
