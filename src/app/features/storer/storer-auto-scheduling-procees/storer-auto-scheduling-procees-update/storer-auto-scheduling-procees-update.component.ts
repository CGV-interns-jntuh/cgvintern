import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
import { GlobalComponent } from 'src/app/Global-Component';

@Component({
  selector: 'app-storer-auto-scheduling-procees-update',
  templateUrl: './storer-auto-scheduling-procees-update.component.html',
  styleUrls: ['./storer-auto-scheduling-procees-update.component.css']
})
export class StorerAutoSchedulingProceesUpdateComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StorerAutoSchedulingProceesUpdateComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
      Storer: '11',
      Processing_Program: 'XESTMSG',
      Active_Currently:'N',
      Start_Time:'09.00',
      Interval_Minutes:10,
      Auto_Processing:'N',
      Process:'TESTMSG',
      Job_Queue:'QUSRNOMAX',
      Last_Run:'10/31/19 11:38',
      End_Time:'14:00',
      Offset_Interval:'3',
      Status:'Ac',
    

       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  update(){
    
  }

}
