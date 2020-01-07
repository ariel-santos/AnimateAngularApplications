import { Component, OnInit  } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  animations: [
    trigger('signal', [
      state('go', style ({
        'background-color': 'green',
        'width': '100px',
        'height': '100px'
      })),
      state('stop', style ({
        'background-color': 'red',
        'width': '50px',
        'height': '50px'
      })),
      transition( '* => *', animate(500) )
    ])
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  signalState = 'stop';

  constructor() { }

  ngOnInit() {
  }

  ChangeSignal() {
    this.signalState = (this.signalState === 'go') ? 'stop' : 'go';
  }



}
