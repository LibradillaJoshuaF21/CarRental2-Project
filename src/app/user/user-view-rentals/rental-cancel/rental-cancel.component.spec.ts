import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCancelComponent } from './rental-cancel.component';

describe('RentalCancelComponent', () => {
  let component: RentalCancelComponent;
  let fixture: ComponentFixture<RentalCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
