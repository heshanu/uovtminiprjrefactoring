import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelexpensesComponent } from './hotelexpenses.component';

describe('HotelexpensesComponent', () => {
  let component: HotelexpensesComponent;
  let fixture: ComponentFixture<HotelexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelexpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
