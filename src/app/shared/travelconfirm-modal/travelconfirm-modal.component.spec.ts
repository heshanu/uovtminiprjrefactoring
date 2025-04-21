import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelconfirmModalComponent } from './travelconfirm-modal.component';

describe('TravelconfirmModalComponent', () => {
  let component: TravelconfirmModalComponent;
  let fixture: ComponentFixture<TravelconfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelconfirmModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelconfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
