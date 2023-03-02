import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-move-queue-entry-assign',
  templateUrl: './move-queue-entry-assign.component.html',
  styleUrls: ['./move-queue-entry-assign.component.css']
})
export class MoveQueueEntryAssignComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<MoveQueueEntryAssignComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Item: 'LUWTITEM Lot Unit Weight Item ',
    Lot: '',
    Qty: '1P (10)',
    Type:'PK',
    From: '13 1/A',
    Bucket: 'A',
    Source: ' 123455240 ',
    To: '13 DOCK/1',
    OpertaorID:'',
    Priority:'20',
   


  
       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  entry(){
    
  }

}
