import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-move-queue-entry-inquiry',
  templateUrl: './move-queue-entry-inquiry.component.html',
  styleUrls: ['./move-queue-entry-inquiry.component.css']
})
export class MoveQueueEntryInquiryComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<MoveQueueEntryInquiryComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Item: 'LUWTITEM Lot Unit Weight Item ',
    Lots: '011FG | LOT2 | LOT3',
    From: '13 1/A',
    To:'13 DOCK/1',
    Qty: '1p (10) A',
    Source: 'PK 123455240 1',
    OnQueue: ' 11/14/22 16.05.57 ',
    Assigned: '',
    Completed:'',
    By:'',
    Priority:'',
    Status:'',
    MoveProblem: ' ',
    Description: '',
    Reported:'',
    by:'',
    Resolution:'',
    Resolved:'',
    By1:'',
    


  
       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  Inquiry(){
    
  }

}
