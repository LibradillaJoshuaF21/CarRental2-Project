import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoCarsComponent } from './admin-do-cars.component';

describe('AdminDoCarsComponent', () => {
  let component: AdminDoCarsComponent;
  let fixture: ComponentFixture<AdminDoCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
