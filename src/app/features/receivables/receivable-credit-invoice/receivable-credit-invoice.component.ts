import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-receivable-credit-invoice',
  templateUrl: './receivable-credit-invoice.component.html',
  styleUrls: ['./receivable-credit-invoice.component.css']
})
export class ReceivableCreditInvoiceComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ReceivableCreditInvoiceComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      InvoiceNumber:'77',
      Building:'604',
      InvoiceDate:'09/27/22',
      Type:'WR Warehouse Recei',
      Customer:'1679 Tina',
      Reference:'Test Ref Number',
      OriginalAmount:'$11.55',
      Balance:'$11.55',
      Reason:''
    })
  }

  continueCredit(){
    
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
