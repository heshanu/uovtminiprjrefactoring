import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveleexpensesComponent } from './traveleexpenses.component';

describe('TraveleexpensesComponent', () => {
  let component: TraveleexpensesComponent;
  let fixture: ComponentFixture<TraveleexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraveleexpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraveleexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
