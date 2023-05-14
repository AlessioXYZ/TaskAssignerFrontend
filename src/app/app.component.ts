import {Component} from '@angular/core';
import {MessagingService} from "./network/firebase/messaging.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskMaster';

  constructor(private messagingService: MessagingService) {
  }

  ngOnInit() {
    this.messagingService.requestPermission();
  }
}
