import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardforplacesComponent } from './cardforplaces.component';

describe('CardforplacesComponent', () => {
  let component: CardforplacesComponent;
  let fixture: ComponentFixture<CardforplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardforplacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardforplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
