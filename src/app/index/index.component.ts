import {Component} from '@angular/core';
import {MessagingService} from "../network/firebase/messaging.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private messagingService: MessagingService) {
  }

  ngOnInit() {
    this.messagingService.requestPermission();
  }
}
