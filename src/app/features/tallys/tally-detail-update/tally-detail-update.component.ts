import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../iheader.service';

@Component({
  selector: 'app-tally-detail-update',
  templateUrl: './tally-detail-update.component.html',
  styleUrls: ['./tally-detail-update.component.css']
})
export class TallyDetailUpdateComponent implements OnInit {

  tally: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TallyDetailUpdateComponent>) { }

  ngOnInit(): void {
    this.tally=this.anyvariable;
    this.form = this.fb.group({
      quantity: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('[0-9]{1,10}'),
        ],
      ],
      item: [null],
      lotCode1: [null],
      lotCode2: [null],
      lotCode3: [null],
      rateType: [null],
      dmgAreas: [null],
      overrideWeight: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('[0-9]{1,10}'),
        ],
      ],
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  updateTallyDetail(){
    
  }

}
