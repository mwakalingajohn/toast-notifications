import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyToasterComponent } from './fancy-toaster/fancy-toaster.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    FancyToasterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FancyToasterComponent
  ]
})
export class FancyToasterModule { }
