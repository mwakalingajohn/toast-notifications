import { ApplicationRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FancyToasterService {

  constructor(
    private appRef: ApplicationRef
  ) { }

  showToaster() {
    console.log("showing toaster");
    // let toasterRef = this.appRef.

  }
}
