import { TestBed } from '@angular/core/testing';

import { IheaderService } from './iheader.service';

describe('IheaderService', () => {
  let service: IheaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IheaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
