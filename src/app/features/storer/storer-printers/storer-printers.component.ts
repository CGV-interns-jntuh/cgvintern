import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-printers',
  templateUrl: './storer-printers.component.html',
  styleUrls: ['./storer-printers.component.css']
})
export class StorerPrintersComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;

  constructor(public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private activeRouter:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
   private dialogRef: MatDialogRef<StorerPrintersComponent>
    ) { }

  ngOnInit(): void {
       this.form = this.fb.group({
        storer: '100',
        blPrinter:'QPRINT',
        pickSheetPrinter:'QPRINT',
        wrPrinter:'QPRINT',
        storageIvcPrinter:'QPRINT',
        generalIvcPrinter:'QPRINT',
        ediReportPrinter:'QPRINT',
        accessOrialIvcPrinter:'QPRINT',
        frieghtBillPrinter:'QPRINT',
        

       });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
