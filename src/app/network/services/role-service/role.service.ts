import {Injectable} from '@angular/core';
import {NetworkService} from "../../network.service";
import {Role} from "../../models/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private networkService: NetworkService) {
  }

  getRoles() {
    return this.networkService.get<Role[]>('employee/roles/');
  }
}
