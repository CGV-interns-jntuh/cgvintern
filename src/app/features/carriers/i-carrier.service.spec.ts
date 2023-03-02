import { TestBed } from '@angular/core/testing';

import { ICarrierService } from './i-carrier.service';

describe('ICarrierService', () => {
  let service: ICarrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ICarrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
