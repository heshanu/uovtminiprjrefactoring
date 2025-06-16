import { TestBed } from '@angular/core/testing';

import { WhatappService } from './whatapp.service';

describe('WhatappService', () => {
  let service: WhatappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
