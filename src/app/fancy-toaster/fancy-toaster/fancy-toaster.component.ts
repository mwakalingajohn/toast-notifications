import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { bounceInRight, bounceOutRight, fadeInDown } from 'ng-animate';


@Component({
  selector: 'jm-fancy-toaster',
  templateUrl: './fancy-toaster.component.html',
  styleUrls: ['./fancy-toaster.component.scss'],
  animations: [
    trigger('showToasterAnimation', [
      state('show', style({})),
      state('hide', style({
        opacity: 0,
        // display: 'none'
      })),
      transition('hide => show', useAnimation(bounceInRight, {
          params: {
            timing: 2
          }
        }
      )),
      transition('show => hide', useAnimation(bounceOutRight, {
          params: {
            timing: 2
          }
        }
      )),
    ])
  ]
})
export class FancyToasterComponent implements OnInit {

  faCheckCircle = faCheckCircle
  time: number = 5000
  progress: string = "0%"
  showToaster: boolean = false

  constructor() {

  }

  ngOnInit(): void {
  }

  _showToaster() {
    this.progress = "0%"
    this.showToaster = true
    let timeElapsed = 0
    const interval = setInterval(() => {
      timeElapsed += 10
      const progress = timeElapsed / this.time * 100
      this.progress = `${progress}%`
      if (timeElapsed >= this.time) {
        this.showToaster = false
        clearInterval(interval)
      }
    }, 10)
  }

}
