import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemodelComponent } from './updatemodel.component';

describe('UpdatemodelComponent', () => {
  let component: UpdatemodelComponent;
  let fixture: ComponentFixture<UpdatemodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatemodelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
