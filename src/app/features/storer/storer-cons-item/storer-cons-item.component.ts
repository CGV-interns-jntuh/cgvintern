import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-cons-item',
  templateUrl: './storer-cons-item.component.html',
  styleUrls: ['./storer-cons-item.component.css']
})
export class StorerConsItemComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerConsItemComponent>
  ) { }

  displayedColumns: string[] = [
    'Storer',
    'Consignee',
    'Storer Item Code',
    'Buyer Item Code',
    'St',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Storer:'',
      Consignee:'',
      StorerItemCode:'',
      BuyerItemCode:'',
      St:''
    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Storer:102,
      Item:'',
      Consignee:'',
      BuyerItems:'' 
    })

    this.dataSource = this.duplicateSource;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
