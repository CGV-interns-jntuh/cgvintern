import { TestBed } from '@angular/core/testing';

import { StorerServiceService } from './storer-service.service';

describe('StorerServiceService', () => {
  let service: StorerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
