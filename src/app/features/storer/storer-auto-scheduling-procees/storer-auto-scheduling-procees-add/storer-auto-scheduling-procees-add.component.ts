import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';
import { GlobalComponent } from 'src/app/Global-Component';

@Component({
  selector: 'app-storer-auto-scheduling-procees-add',
  templateUrl: './storer-auto-scheduling-procees-add.component.html',
  styleUrls: ['./storer-auto-scheduling-procees-add.component.css']
})
export class StorerAutoSchedulingProceesAddComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StorerAutoSchedulingProceesAddComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    Storer: '',
    Processing_Program: '',
    Active_Currently:'N',
    Start_Time:'00.00',
    Interval_Minutes:10,
    Auto_Processing:'Y',
    Process:'',
    Job_Queue:'',
    Last_Run:'01/01/40 00:00',
    End_Time:'23:59',
    Offset_Interval:'',
    Status:'Ac',

    

       
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
