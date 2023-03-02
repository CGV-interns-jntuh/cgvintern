import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-move-queue-complete',
  templateUrl: './move-queue-complete.component.html',
  styleUrls: ['./move-queue-complete.component.css']
})
export class MoveQueueCompleteComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<MoveQueueCompleteComponent >
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Storer: '13 ',
    ItemCode: 'LUWTITEM',
    Lots: 'O11FG | LOT2 | LOT3',
    Form:'13 1/A',
    To: '13 DOCK/1',
    Quantity: '1P (10)',
    MoveTytpe: 'PICK 123455240 1',
    Priority: '20',
    Operator: '',
    Status: 'AC',
   


  
       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  move(){
    
  }

}
