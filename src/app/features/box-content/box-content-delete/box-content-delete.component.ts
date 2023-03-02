import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-box-content-delete',
  templateUrl: './box-content-delete.component.html',
  styleUrls: ['./box-content-delete.component.css']
})
export class BoxContentDeleteComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<BoxContentDeleteComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    boxNumber: ' JAMES BOX 2 ',
    Bundle:'',
    sequence: 1,
    contentIdentifier:'',
    segment:'',
    majorDescription:'LAKE 2014',
    minorDescription:'$4,011.36',
    clientID:'AUX',
    group:'',
    contentFromDate:'0001-01-01',
    toDate:'9999-12-31',
    retentionCode:'',
    ageClass:'',
    recordSource:'RCU25R',
    filetype:'XXX',
    lastChanged:'2016-05-10-10.13.56.070232',
    by:'JBICE',
    contentStatus:'RCV',
    


  
       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  invoice(){
    
  }

}
