import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/entities/event';
import { NgRedux } from '@angular-redux/store';
import { EventActions } from 'src/app/redux/actions/eventActions';
import { FirebaseStorageService } from 'src/app/service/firebase-storage.service';
import { v4 as uuidv4 } from 'uuid';
import { AppState } from 'src/app/redux/state/appState';
//import {MatDatepickerModule } from '@angular/material/datepicker';


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
    startDate : new FormControl('', Validators.required),
    endDate : new FormControl('', Validators.required),
    location : new FormControl('', Validators.required),
    picture : new FormControl(),
  })

  constructor(
    private eventActions: EventActions,
    private route: ActivatedRoute,
    private router: Router,
    private storage: FirebaseStorageService,
    private ngRedux: NgRedux<AppState>
  ) {}

  ngOnInit(): void {
    this.editableEvent = history.state.data.event;
    this.toCreate = history.state.data.toCreate;
  }

  openDialog(event: any): void {
    const uuid = uuidv4();
    this.storage.uploadImageToStorage(uuid+"", event.target.files[0]); // should be okay to use but unsure about where the array files is at
    this.media = uuid;
  }

  onSubmitCreate(): void {
    this.event.value.createdDate = new Date();
    this.event.value.media = this.media;
    this.event.value.author = this.ngRedux.getState().userState.userInfo;
    console.log(this.event);
    this.eventActions.addEvent(this.event.value);
    this.router.navigate(['/eventList/']);
  }

  onSubmitUpdate(): void {
    this.editableEvent.title = this.event.value.title;
    this.editableEvent.content = this.event.value.content;
    this.editableEvent.startDate = this.event.value.startDate;
    this.editableEvent.endDate = this.event.value.endDate;
    this.editableEvent.location = this.event.value.location;
    this.editableEvent.media = this.media === null? this.editableEvent.media : this.media;
    this.eventActions.updateEvent(this.editableEvent);
    this.router.navigate(['/eventList/']);
  }
}
