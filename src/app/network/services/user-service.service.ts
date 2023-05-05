import { Injectable } from '@angular/core';
import {NetworkService} from "../network.service";
import {UserInterface} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private networkService: NetworkService) { }

  login(username: string, password: string) {
    return this.networkService.post<UserInterface>('login/', {username: username, password: password})
  }

  changePassword(oldPassword: string, newPassword: string) {
    return this.networkService.post<UserInterface>('change-password/', {old_password: oldPassword, new_password: newPassword})
  }
}
