import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-content-change',
  templateUrl: './content-change.component.html',
  styleUrls: ['./content-change.component.css']
})
export class ContentChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContentChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
      BoxNumber:'JAMES BOX 2',
      Location:'RCV/DST',
      Customer:'JAMES',
      Bundles:'',
      ContentCount:1,
      Bundle:'',
      Sequence:'1',
      ContentID:'305163IN',
      Segment:'',
      XReference:'5013190',
      Source:'RCU25R',
      Asset:'',
      Filetype:'XXX',
      MajorDesc:'LAKE 2014',
      MinorDesc:'$4,011.36',
      ClientId:'AUX',
      ClientGroup:'',
      FromToDates:'0001-01-01-9999-12-31',
      AgeClass:'',
      SchdDestry:'9999-12-31',
      RetentionCode:'',
      Status:'',

    
       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  attributes(){
    
  }

}
