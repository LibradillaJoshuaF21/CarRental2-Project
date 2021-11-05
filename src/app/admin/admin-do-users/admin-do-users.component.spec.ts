import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoUsersComponent } from './admin-do-users.component';

describe('AdminDoUsersComponent', () => {
  let component: AdminDoUsersComponent;
  let fixture: ComponentFixture<AdminDoUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
