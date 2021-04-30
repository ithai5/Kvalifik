import { Component, OnInit } from '@angular/core';
import { Event } from '../../entities/event';
import { EventService } from '../../service/event.service'; 

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

}
