import { TestBed } from '@angular/core/testing';

import { ChatforregistrationService } from './chatforregistration.service';

describe('ChatforregistrationService', () => {
  let service: ChatforregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatforregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
