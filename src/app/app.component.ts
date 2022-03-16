import { Component } from '@angular/core';
import { FancyToasterService } from './fancy-toaster/fancy-toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toast-notifications';

  constructor(private fancyToasterService: FancyToasterService) {

  }

  showToastr() {
    this.fancyToasterService.showToaster();
  }
}
