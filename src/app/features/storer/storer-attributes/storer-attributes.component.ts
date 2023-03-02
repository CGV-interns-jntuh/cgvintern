import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-attributes',
  templateUrl: './storer-attributes.component.html',
  styleUrls: ['./storer-attributes.component.css']
})
export class StorerAttributesComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerAttributesComponent>
  ) { }

  displayedColumns: string[] = [
    'Attribute',
    'Value',
    'Action'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Attribute:'Get Supervisor Override',
      Value:'*No'
    },
    {
      Attribute:'Max count tries before Lockout',
      Value:'2'
    },
    {
      Attribute:'Max count tries before Lockout',
      Value:'025'
    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      Storer:'65 '
    })

    this.dataSource = this.duplicateSource;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
