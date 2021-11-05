import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRentCarsComponent } from './user-rent-cars.component';

describe('UserRentCarsComponent', () => {
  let component: UserRentCarsComponent;
  let fixture: ComponentFixture<UserRentCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRentCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRentCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
