import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageexpensesComponent } from './beverageexpenses.component';

describe('BeverageexpensesComponent', () => {
  let component: BeverageexpensesComponent;
  let fixture: ComponentFixture<BeverageexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeverageexpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeverageexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
