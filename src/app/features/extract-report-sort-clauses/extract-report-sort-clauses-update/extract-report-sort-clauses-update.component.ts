import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-extract-report-sort-clauses-update',
  templateUrl: './extract-report-sort-clauses-update.component.html',
  styleUrls: ['./extract-report-sort-clauses-update.component.css']
})
export class ExtractReportSortClausesUpdateComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {}

  element = history.state;

  UpdateExtractReportForm: any = this.fb.group({
    ExtractName: [this.element.ExtractName],
    ExtractFile: [this.element.ExtractFile],
    OrderBy: [this.element.OrderBy],
    GroupBy: [this.element.GroupBy]
    
  });

  onBack() {
    this.router.navigate(['/main-nav/extractreport/read']);
  }

  ngOnInit(): void {}

}
