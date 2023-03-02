import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractReportSortClausesUpdateComponent } from './extract-report-sort-clauses-update.component';

describe('ExtractReportSortClausesUpdateComponent', () => {
  let component: ExtractReportSortClausesUpdateComponent;
  let fixture: ComponentFixture<ExtractReportSortClausesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractReportSortClausesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractReportSortClausesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
