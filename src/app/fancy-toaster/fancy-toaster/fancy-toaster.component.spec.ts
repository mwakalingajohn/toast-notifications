import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyToasterComponent } from './fancy-toaster.component';

describe('FancyToasterComponent', () => {
  let component: FancyToasterComponent;
  let fixture: ComponentFixture<FancyToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyToasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
