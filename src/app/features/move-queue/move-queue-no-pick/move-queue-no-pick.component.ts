import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-move-queue-no-pick',
  templateUrl: './move-queue-no-pick.component.html',
  styleUrls: ['./move-queue-no-pick.component.css']
})
export class MoveQueueNoPickComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<MoveQueueNoPickComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Storer: '13 ',
    ItemCode: 'LUWTITEM',
    Lots: '011FG | LOT2 | LOT3',
    From:'13 1/A',
    To: '13 DOCK/1',
    Quantity: '1P (10)',
    MoveType: ' pick    123455240 ',
    Priority: '20',
    Opertaor:'',
    Status:'AC',
   


  
       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  picked(){
    
  }

}
