import { TestBed } from '@angular/core/testing';

import { ImapZoneService } from './imap-zone.service';

describe('ImapZoneService', () => {
  let service: ImapZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImapZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
