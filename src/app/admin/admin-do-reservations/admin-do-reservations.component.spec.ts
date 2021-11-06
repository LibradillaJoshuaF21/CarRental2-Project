import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoReservationsComponent } from './admin-do-reservations.component';

describe('AdminDoReservationsComponent', () => {
  let component: AdminDoReservationsComponent;
  let fixture: ComponentFixture<AdminDoReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
