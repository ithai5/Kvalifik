import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {WebActivity} from '../../entities/web-activity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() webActivity: WebActivity

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToView() {
    if (this.webActivity.type === "post") {
      this.router.navigate(['/postList/:id'], {state: {data: {post: this.webActivity}}});
    } else {
      this.router.navigate(['/eventList/:id'], {state: {data: {event: this.webActivity}}});
    }
  }

}
