import { Component, OnInit  } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  animations: [
    trigger('signal', [
      state('void', style ({
        'transform': 'translateY(-100%)'
      })),
      state('go', style ({
        'background-color': 'green',
        // 'width': '100px',
        'height': '100px'
      })),
      state('stop', style ({
        'background-color': 'red',
        // 'width': '50px',
        'height': '100px'
      })),
      // use void not to start animation when load page
      transition( 'void <=> *', animate(1000, keyframes ([
        style({ 'transform': 'scale(0)' }),
        style({ 'transform': 'scale(0.9)' }),
        style({ 'transform': 'scale(0.1)' }),
        style({ 'transform': 'scale(0.9)' }),
        style({ 'transform': 'scale(0.5)' }),
        style({ 'transform': 'scale(1)' }),
      ]))),
      // transition( '* => *', animate(500) )
      transition( 'go <=> stop', animate('2s 1s cubic-bezier(0.1, 0.03, 0.685, 0.22)') )
      // use cubic-bezier to replace ease-out, more options in https://easings.net
    ])
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  signalState = 'stop';
  signalShow = false;

  constructor() { }

  ngOnInit() {
  }

  ChangeSignal() {
    this.signalState = (this.signalState === 'go') ? 'stop' : 'go';
  }

  ShowSignal() {
    this.signalShow = !this.signalShow;
  }



}
