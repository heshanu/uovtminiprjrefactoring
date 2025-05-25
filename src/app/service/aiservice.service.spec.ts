import { TestBed } from '@angular/core/testing';

import { AiserviceService } from './aiservice.service';

describe('AiserviceService', () => {
  let service: AiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
