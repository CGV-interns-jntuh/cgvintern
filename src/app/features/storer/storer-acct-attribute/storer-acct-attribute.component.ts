import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-acct-attribute',
  templateUrl: './storer-acct-attribute.component.html',
  styleUrls: ['./storer-acct-attribute.component.css']
})
export class StorerAcctAttributeComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerAcctAttributeComponent>
  ) { }

  displayedColumns: string[] = [
    'Attribute',
    'Attribute Value',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Attribute:'',
      Value:''
    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Customer:100
    })

    //this.dataSource = this.duplicateSource;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
