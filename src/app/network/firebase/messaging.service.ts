import { Injectable } from '@angular/core';
import {BehaviorSubject, first} from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import firebase from "firebase/compat";
import MessagePayload = firebase.messaging.MessagePayload;
import {EmployeeService} from "../services/employee-service.service";

@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject<MessagePayload | null>(null);

  constructor(private angularFireMessaging: AngularFireMessaging, private employeeService: EmployeeService) {
    this.angularFireMessaging.messages
      .pipe(first())
      .subscribe(
      (payload) => {
        this.currentMessage.next(payload);
      }
    );
  }

  requestPermission() {
    return this.angularFireMessaging.requestToken;
  }
}
