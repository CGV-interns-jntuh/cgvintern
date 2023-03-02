import { TestBed } from '@angular/core/testing';

import { IexitPointsService } from './iexit-points.service';

describe('ImapZoneService', () => {
  let service: IexitPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IexitPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
