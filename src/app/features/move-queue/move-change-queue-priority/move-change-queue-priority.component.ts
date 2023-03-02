import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-move-change-queue-priority',
  templateUrl: './move-change-queue-priority.component.html',
  styleUrls: ['./move-change-queue-priority.component.css']
})
export class MoveChangeQueuePriorityComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<MoveChangeQueuePriorityComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Item: 'LUWTITEM Lot Unit weight Item ',
    Lots: '',
    From: '13 1/A',
    Source:'123455240',
    To: '13 DOCK/1  ',
    ChangePriorityby: '',
    Changeforonlythismove: ' Y',
    Changeallmovesforthissourcedocument: 'N',
    Changeallmovesforthisitem: 'N',
    Changeallmovesfortheformlocation: ' N ',
    Changeallmovesforthetolocation: 'N',
   


  
       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  priorities(){
    
  }

}
