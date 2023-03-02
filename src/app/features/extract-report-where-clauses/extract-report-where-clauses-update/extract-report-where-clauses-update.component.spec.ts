import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractReportWhereClausesUpdateComponent } from './extract-report-where-clauses-update.component';

describe('ExtractReportWhereClausesUpdateComponent', () => {
  let component: ExtractReportWhereClausesUpdateComponent;
  let fixture: ComponentFixture<ExtractReportWhereClausesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractReportWhereClausesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractReportWhereClausesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
