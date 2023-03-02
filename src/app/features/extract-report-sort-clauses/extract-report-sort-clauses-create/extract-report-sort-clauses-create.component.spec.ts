import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractReportSortClausesCreateComponent } from './extract-report-sort-clauses-create.component';

describe('ExtractReportSortClausesCreateComponent', () => {
  let component: ExtractReportSortClausesCreateComponent;
  let fixture: ComponentFixture<ExtractReportSortClausesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractReportSortClausesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractReportSortClausesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
