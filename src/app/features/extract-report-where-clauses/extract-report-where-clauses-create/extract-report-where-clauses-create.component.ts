import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-extract-report-where-clauses-create',
  templateUrl: './extract-report-where-clauses-create.component.html',
  styleUrls: ['./extract-report-where-clauses-create.component.css']
})
export class ExtractReportWhereClausesCreateComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {}

  addExtractReportWhereForm: any = this.fb.group({
    ExtractName: [null],
    ExtractFile: [null],
    WhereClause: [null]
  });
  onBack() {
    this.router.navigate(['/main-nav/extractreportwhere/read']);
  }

  ngOnInit(): void {}

}
