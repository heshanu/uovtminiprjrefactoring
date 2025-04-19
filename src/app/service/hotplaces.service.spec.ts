import { TestBed } from '@angular/core/testing';

import { HotplacesService } from './hotplaces.service';

describe('HotplacesService', () => {
  let service: HotplacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotplacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
