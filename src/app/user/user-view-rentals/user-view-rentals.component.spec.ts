import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRentalsComponent } from './user-view-rentals.component';

describe('UserViewRentalsComponent', () => {
  let component: UserViewRentalsComponent;
  let fixture: ComponentFixture<UserViewRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewRentalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
