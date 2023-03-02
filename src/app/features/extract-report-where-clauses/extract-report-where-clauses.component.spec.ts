import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractReportWhereClausesComponent } from './extract-report-where-clauses.component';

describe('ExtractReportWhereClausesComponent', () => {
  let component: ExtractReportWhereClausesComponent;
  let fixture: ComponentFixture<ExtractReportWhereClausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractReportWhereClausesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractReportWhereClausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
