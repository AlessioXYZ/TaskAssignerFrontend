import {Component, OnInit} from '@angular/core';
import {MessagingService} from "../network/firebase/messaging.service";
import {AbstractUserService} from "../network/services/abstract-user.service";
import {LoggerService} from "../shared/logger/logger.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-web-app',
  template: `
    <app-list-style></app-list-style>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class WebAppComponent implements OnInit {
  constructor(
    private messaging: MessagingService, private abstractUserService: AbstractUserService,
    private logger: LoggerService, private router: Router
  ) {
  }

  fetchAndSaveDevice() {
    this.messaging.requestPermission().subscribe({
      next: token => {
        if (token) {
          this.abstractUserService.saveDevice(token);
        }
      },
      error: (err) => {
        this.logger.log('Impossibile ottenere il token per le notifiche push');
      }
    });
  }

  redirectIfNotPasswordChanged() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user.has_changed_password) {
      this.router.navigate(['/web-app/change-password']).then(r => r);
    }
  }

  ngOnInit() {
    this.fetchAndSaveDevice()

    if (!this.router.url.includes('change-password')) {
      this.redirectIfNotPasswordChanged();
    }
  }
}
