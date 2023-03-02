import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-extract-report-where-clauses-update',
  templateUrl: './extract-report-where-clauses-update.component.html',
  styleUrls: ['./extract-report-where-clauses-update.component.css']
})
export class ExtractReportWhereClausesUpdateComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {}

  element = history.state;

  UpdateExtractReportWhereForm: any = this.fb.group({
    ExtractName: [this.element.ExtractName],
    ExtractFile: [this.element.ExtractFile],
    WhereClause: [this.element.WhereClause]
    
    
  });

  onBack() {
    this.router.navigate(['/main-nav/extractreportwhere/read']);
  }

  ngOnInit(): void {}

}
