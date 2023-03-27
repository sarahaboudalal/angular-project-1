import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div>
    <p>This website use cookies for better user experience</p>
  </div>`,
  styles: [
    'div{margin: 10px 0px; padding: 10px 0px; text-align:center}',
    'p{font-size: 14px}',
  ],
})
export class NotificationComponent {}
