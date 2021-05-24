import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/entities/event';
import { FirebaseStorageService } from 'src/app/service/firebase-storage.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  event: Event;

  constructor(private route: ActivatedRoute, private firebase: FirebaseStorageService) { }

  ngOnInit(): void {
    this.event = history.state.data.event;
    this.firebase.downloadImageFromStorage(this.event.media).subscribe(res => this.event.media = res);
  }

}
