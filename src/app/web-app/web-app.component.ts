import {Component, OnInit} from '@angular/core';
import {MessagingService} from "../network/firebase/messaging.service";
import {AbstractUserService} from "../network/services/abstract-user.service";

@Component({
  selector: 'app-web-app',
  template: `
    <app-list-style></app-list-style>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class WebAppComponent implements OnInit {
  constructor(private messaging: MessagingService, private abstractUserService: AbstractUserService) {
  }

  ngOnInit() {
    this.messaging.requestPermission().subscribe({
      next: token => {
        if (token) {
          this.abstractUserService.saveDevice(token);
        }
      },
      error: (err) => {
        console.log('Unable to get permission to notify.', err);
      }
    });
  }
}
