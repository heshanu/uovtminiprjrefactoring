import { TestBed } from '@angular/core/testing';

import { ModeoftravelagentService } from './modeoftravelagent.service';

describe('ModeoftravelagentService', () => {
  let service: ModeoftravelagentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeoftravelagentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
