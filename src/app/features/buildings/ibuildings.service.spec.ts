import { TestBed } from '@angular/core/testing';

import { IbuildingsService } from './ibuildings.service';

describe('IbuildingsService', () => {
  let service: IbuildingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IbuildingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
