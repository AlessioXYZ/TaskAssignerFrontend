import { Injectable } from '@angular/core';
import {NetworkService} from "../../network.service";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private networkService: NetworkService) { }

  login(username: string, password: string) {
    return this.networkService.post<User>('login/', {username: username, password: password})
  }
}
