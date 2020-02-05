import { Component } from '@angular/core';
import { MessageService } from './message/message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Guard Demo';

  constructor(public messageService : MessageService) {

  }
}
