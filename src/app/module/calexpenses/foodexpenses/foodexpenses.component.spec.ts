import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodexpensesComponent } from './foodexpenses.component';

describe('FoodexpensesComponent', () => {
  let component: FoodexpensesComponent;
  let fixture: ComponentFixture<FoodexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodexpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
