import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractReportSortClausesComponent } from './extract-report-sort-clauses.component';

describe('ExtractReportSortClausesComponent', () => {
  let component: ExtractReportSortClausesComponent;
  let fixture: ComponentFixture<ExtractReportSortClausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractReportSortClausesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractReportSortClausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
