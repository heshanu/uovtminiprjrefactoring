import { TestBed } from '@angular/core/testing';

import { OrderObjService } from './order-obj.service';

describe('OrderObjService', () => {
  let service: OrderObjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderObjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
