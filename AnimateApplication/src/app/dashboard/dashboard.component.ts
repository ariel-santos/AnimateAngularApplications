import { Component, OnInit  } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  animations: [
    trigger('signal', [
      state('go', style ({
        'background-color': 'green'
      }))
    ])
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
