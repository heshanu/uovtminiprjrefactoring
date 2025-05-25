import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedspinnerComponent } from './sharedspinner.component';

describe('SharedspinnerComponent', () => {
  let component: SharedspinnerComponent;
  let fixture: ComponentFixture<SharedspinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedspinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
