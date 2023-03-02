import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-box-content-inquiry',
  templateUrl: './box-content-inquiry.component.html',
  styleUrls: ['./box-content-inquiry.component.css']
})
export class BoxContentInquiryComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BoxContentInquiryComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    boxNumber: '772297140780',
    location:'ANTHONY',
   // reference:'',
    customer:'',
    bundles:'',
    contentCount:'',
    bundle:'',
    sequence:'',
    contentId:'',
    segment:'',
    xRef:'',
    majorDesc:'',
    docDates:'',
    firstIn:'',
    ageClass:'',
    fileType:'',
    retentionCode:'',
    scheduledDestruction:'',
    clientId:'',
    clientGroup:'',
    asset:'',
    recordSource:'',
    status:''






  
    


  
       
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
