import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HottravellistComponent } from './hottravellist.component';

describe('HottravellistComponent', () => {
  let component: HottravellistComponent;
  let fixture: ComponentFixture<HottravellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HottravellistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HottravellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
