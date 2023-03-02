import { TestBed } from '@angular/core/testing';

import { IitemService } from './iitem.service';

describe('IitemService', () => {
  let service: IitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
