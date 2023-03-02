import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-reasonableness',
  templateUrl: './storer-reasonableness.component.html',
  styleUrls: ['./storer-reasonableness.component.css']
})
export class StorerReasonablenessComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerReasonablenessComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Storer:'599 M&W Test Storer 1',
      CLinboudWeight:'',
      CLinboudCubes:'',
      CLoutboudWeight:'',
      CLoutboudCubes:'',
      TLinboudWeight:'',
      TLinboudCubes:'',
      TLoutboudWeight:'',
      TLoutboudCubes:'',
      StorageInvoice:'',
      AccesorialInvoice:'',
      WrInvoice:'',
      GeneralInvoice:'',
      FreightInvoice:'',
      CartageInvoice:'',
      StorageVariancePercent:''
    })

  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
