import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotplacesComponent } from './hotplaces.component';

describe('HotplacesComponent', () => {
  let component: HotplacesComponent;
  let fixture: ComponentFixture<HotplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotplacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
