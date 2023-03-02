import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractReportWhereClausesDeleteComponent } from './extract-report-where-clauses-delete.component';

describe('ExtractReportWhereClausesDeleteComponent', () => {
  let component: ExtractReportWhereClausesDeleteComponent;
  let fixture: ComponentFixture<ExtractReportWhereClausesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractReportWhereClausesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractReportWhereClausesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
