import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractReportWhereClausesCreateComponent } from './extract-report-where-clauses-create.component';

describe('ExtractReportWhereClausesCreateComponent', () => {
  let component: ExtractReportWhereClausesCreateComponent;
  let fixture: ComponentFixture<ExtractReportWhereClausesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractReportWhereClausesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractReportWhereClausesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
