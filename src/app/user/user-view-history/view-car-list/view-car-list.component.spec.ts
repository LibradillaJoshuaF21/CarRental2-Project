import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarListComponent } from './view-car-list.component';

describe('ViewCarListComponent', () => {
  let component: ViewCarListComponent;
  let fixture: ComponentFixture<ViewCarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
