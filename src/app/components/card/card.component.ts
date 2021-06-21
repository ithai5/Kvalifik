import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {WebActivity} from '../../entities/web-activity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() passedWebActivity: WebActivity



  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToView() {
    if (this.passedWebActivity.type === "post") {
      this.router.navigate(['/postList/viewPost'], {state: {data: {post: this.passedWebActivity}}});
    } else {
      this.router.navigate(['/eventList/viewEvent'], {state: {data: {event: this.passedWebActivity}}});
    }
  }

}
