import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { ICarrierService } from '../i-carrier.service';
import { ExtractReportWhereClauseService } from '../extract-report-where-clause.service';

@Component({
  selector: 'app-extract-report-where-clauses-delete',
  templateUrl: './extract-report-where-clauses-delete.component.html',
  styleUrls: ['./extract-report-where-clauses-delete.component.css']
})
export class ExtractReportWhereClausesDeleteComponent implements OnInit {

  reportwhere: any;
  form!: FormGroup;
  constructor(
    public repwhere: ExtractReportWhereClauseService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ExtractReportWhereClausesDeleteComponent>
  ) {}

  ngOnInit(): void {
    this.reportwhere = this.anyvariable;
    this.form = this.fb.group({
      ExtractName:'ACTIVITY',
      FileName:'SACTWF',
      WhereClause:'SASTOR = {STORER}'
    });
  }
  deleteReportWhere() {
    alert('Deleted');
  }
  closeDialog() {
    this.dialogRef.close();
  }

}
