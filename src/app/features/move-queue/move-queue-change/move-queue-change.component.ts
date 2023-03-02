import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-move-queue-change',
  templateUrl: './move-queue-change.component.html',
  styleUrls: ['./move-queue-change.component.css']
})
export class MoveQueueChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
   @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<MoveQueueChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Storer: '13 Neils Item Storer',
    Item: 'LUWTITEM Lot Unit Weight Item',
    Lots: 'O11FG | LOT2 | LOT3',
    Form:'13 1/A',
    Quantity: '10',
    NewLocation: '',
    NewLots: '',
   


  
       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
    Locations(){}

}
