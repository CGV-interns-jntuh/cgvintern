import { TestBed } from '@angular/core/testing';

import { IMapLocationService } from './i-map-location.service';

describe('IMapLocationService', () => {
  let service: IMapLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IMapLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
