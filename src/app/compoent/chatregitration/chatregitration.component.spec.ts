import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatregitrationComponent } from './chatregitration.component';

describe('ChatregitrationComponent', () => {
  let component: ChatregitrationComponent;
  let fixture: ComponentFixture<ChatregitrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatregitrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatregitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
