import { TestBed } from '@angular/core/testing';

import { HotelobjService } from './hotelobj.service';

describe('HotelobjService', () => {
  let service: HotelobjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelobjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
