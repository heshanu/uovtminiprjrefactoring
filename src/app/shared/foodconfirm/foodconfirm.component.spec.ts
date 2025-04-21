import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodconfirmComponent } from './foodconfirm.component';

describe('FoodconfirmComponent', () => {
  let component: FoodconfirmComponent;
  let fixture: ComponentFixture<FoodconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodconfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
