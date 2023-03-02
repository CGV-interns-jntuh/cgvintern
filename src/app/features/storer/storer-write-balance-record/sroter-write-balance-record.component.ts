import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-sroter-write-balance-record',
  templateUrl: './sroter-write-balance-record.component.html',
  styleUrls: ['./sroter-write-balance-record.component.css']
})
export class SroterWriteBalanceRecordComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  
  constructor(private activeRouter:ActivatedRoute, 
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable:any,
    private fb: FormBuilder,
      private dialogRef:MatDialogRef<SroterWriteBalanceRecordComponent>
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      StorerNumber: '',
      BalanceDate: '',
      RecordType:'',


    })
  }
  writeBalanceRecord(){
    
  }
  backstorer(){

  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
