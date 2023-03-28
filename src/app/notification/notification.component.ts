import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div [hidden]="dispalyNotification">
    <p>This website use cookies for better user experience</p>
    <div class="close"><button class="btn" (click)="onClick()">X</button></div>
  </div>`,
  styles: [
    'div{margin: 10px 0px; padding: 10px 0px; text-align:center}',
    'p{font-size: 14px}',
  ],
})
export class NotificationComponent {
  dispalyNotification: boolean = false;
  onClick() {
    this.dispalyNotification = true;
  }
}
