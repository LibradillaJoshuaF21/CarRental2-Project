import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveDeleteComponent } from './reserve-delete.component';

describe('ReserveDeleteComponent', () => {
  let component: ReserveDeleteComponent;
  let fixture: ComponentFixture<ReserveDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
