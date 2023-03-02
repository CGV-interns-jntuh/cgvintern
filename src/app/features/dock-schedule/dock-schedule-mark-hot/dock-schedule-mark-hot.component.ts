import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-dock-schedule-mark-hot',
  templateUrl: './dock-schedule-mark-hot.component.html',
  styleUrls: ['./dock-schedule-mark-hot.component.css']
})
export class DockScheduleMarkHotComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DockScheduleMarkHotComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Storer: 1301,
    carrier:'DSTT',
    ReferenceNo:'NODE TEST 3',
    IODocNo:0,
    DateTime:'12/28/22 8:00',
    Status:'EN',
    Comment:'',
   
       
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
