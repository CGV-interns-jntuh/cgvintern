import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-extract-report-sort-clauses-create',
  templateUrl: './extract-report-sort-clauses-create.component.html',
  styleUrls: ['./extract-report-sort-clauses-create.component.css']
})
export class ExtractReportSortClausesCreateComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {}

  addExtractReportForm: any = this.fb.group({
    ExtractName: [null],
    ExtractFile: [null],
    OrderBy: [null],
    GroupBy: [null]
  });

  onBack() {
    this.router.navigate(['/main-nav/extractreport/read']);
  }

  ngOnInit(): void {}

}
