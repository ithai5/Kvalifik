import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/entities/event';
import { EventActions } from 'src/app/redux/actions/eventActions';
import { FirebaseStorageService } from 'src/app/service/firebase-storage.service';
import { v4 as uuidv4 } from 'uuid';

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

  constructor(
    private eventActions: EventActions,
    private route: ActivatedRoute,
    private router: Router,
    private storage: FirebaseStorageService
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
    console.log(this.media);
    this.eventActions.addEvent(this.event.value);
    this.router.navigate(['/eventList/']);
  }

  onSubmitUpdate(): void {
    this.editableEvent.title = this.event.value.title;
    this.editableEvent.content = this.event.value.content;
    this.eventActions.updateEvent(this.editableEvent);
    this.router.navigate(['/eventList/']);
  }
}
