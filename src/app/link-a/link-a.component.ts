import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../message/message.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-link-a',
  templateUrl: './link-a.component.html',
  styleUrls: ['./link-a.component.css']
})
export class LinkAComponent implements OnInit {
  gsGroup : FormGroup = new FormGroup({
  fcName : new FormControl()
  });

  submit() {
    this.messageSerivce.message = "Form saved!";
    this.reset();
  }

  constructor(public messageSerivce : MessageService) { }

  ngOnInit() {
  }

  canDeactivate() {
    if(this.gsGroup.dirty) {
      this.messageSerivce.message = "You have unsaved changes";
    }

    return of(!this.gsGroup.dirty).toPromise();
  }

  reset() {
    this.gsGroup.reset();
  }
}