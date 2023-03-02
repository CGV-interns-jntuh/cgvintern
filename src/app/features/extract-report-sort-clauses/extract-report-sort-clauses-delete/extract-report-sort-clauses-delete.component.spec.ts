import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractReportSortClausesDeleteComponent } from './extract-report-sort-clauses-delete.component';

describe('ExtractReportSortClausesDeleteComponent', () => {
  let component: ExtractReportSortClausesDeleteComponent;
  let fixture: ComponentFixture<ExtractReportSortClausesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractReportSortClausesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractReportSortClausesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
