import { Component, OnInit, Input } from '@angular/core';
import {WebActivity} from '../../entities/web-activity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() webActivity: WebActivity

  constructor() { }

  ngOnInit(): void {

  }

}
