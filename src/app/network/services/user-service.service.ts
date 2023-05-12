import {Injectable} from '@angular/core';
import {NetworkService} from "../network.service";
import {User, UserInterface} from "../models/user";
import {Company} from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private networkService: NetworkService) {
  }

  login(username: string, password: string) {
    return this.networkService.post<UserInterface>('login/', {username: username, password: password})
  }

  changePassword(oldPassword: string, newPassword: string) {
    return this.networkService.post<UserInterface>('change-password/', {old_password: oldPassword, new_password: newPassword})
  }

  register(user: User, company: Company) {
    return this.networkService.post<UserInterface>('register/', {
      'company_name': company.name, 'company_vat_number': company.vat_number,
      'first_name': user.first_name, 'last_name': user.last_name,
      'username': user.username, 'email': user.email, 'password': user.password,
    })
  }
}
