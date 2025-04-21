import { TestBed } from '@angular/core/testing';

import { BeverageobjService } from './beverageobj.service';

describe('BeverageobjService', () => {
  let service: BeverageobjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageobjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
