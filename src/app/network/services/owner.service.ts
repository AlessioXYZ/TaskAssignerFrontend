import { Injectable } from '@angular/core';
import {AbstractUserService} from "./abstract-user.service";

@Injectable({
  providedIn: 'root'
})
export class OwnerService extends AbstractUserService {
  redirectUrl: string = '/web-app/owner/';
}
