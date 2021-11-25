import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRentalsListComponent } from './view-rentals-list.component';

describe('ViewRentalsListComponent', () => {
  let component: ViewRentalsListComponent;
  let fixture: ComponentFixture<ViewRentalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRentalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRentalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
