import { TestBed } from '@angular/core/testing';

import { FoodobjService } from './foodobj.service';

describe('FoodobjService', () => {
  let service: FoodobjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodobjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
