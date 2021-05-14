import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from 'src/app/entities/event';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  @Input() event: Event;
  @Output() eventClicked: EventEmitter<Event> = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

}
