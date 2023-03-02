import { TestBed } from '@angular/core/testing';

import { InboundStagingService } from './inbound-staging.service';

describe('InboundStagingService', () => {
  let service: InboundStagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InboundStagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
