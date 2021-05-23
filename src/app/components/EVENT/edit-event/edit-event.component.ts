import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  editableEvent: Event;
  toCreate: boolean;
  media: string;
  event = new FormGroup({
    title : new FormControl('', Validators.required),
    content : new FormControl('', Validators.required),
    picture : new FormControl(),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
