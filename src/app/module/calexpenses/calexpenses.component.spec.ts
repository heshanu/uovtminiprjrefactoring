import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalexpensesComponent } from './calexpenses.component';

describe('CalexpensesComponent', () => {
  let component: CalexpensesComponent;
  let fixture: ComponentFixture<CalexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalexpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
