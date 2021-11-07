import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRentalDetailComponent } from './view-rental-detail.component';

describe('ViewRentalDetailComponent', () => {
  let component: ViewRentalDetailComponent;
  let fixture: ComponentFixture<ViewRentalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRentalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRentalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
