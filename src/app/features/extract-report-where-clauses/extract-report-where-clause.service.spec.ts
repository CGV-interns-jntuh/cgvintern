import { TestBed } from '@angular/core/testing';

import { ExtractReportWhereClauseService } from './extract-report-where-clause.service';

describe('ExtractReportWhereClauseService', () => {
  let service: ExtractReportWhereClauseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractReportWhereClauseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
