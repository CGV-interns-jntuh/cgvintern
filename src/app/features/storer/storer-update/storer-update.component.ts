import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-update',
  templateUrl: './storer-update.component.html',
  styleUrls: ['./storer-update.component.css']
})
export class StorerUpdateComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StorerUpdateComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
    StoreNumber: 11,
    Name: 'Escobedo plant11',
    Address: [null],
    Zipcode: 43235,
    phoneNumber:[null],
    primaryRep: [null],
    CreditLimit: [null],
    Building: 'ONE',
    StandardClose: 'Y',
    ForcePSBL: [null],
    CutsAllowed: 'Y',
    CHEPPallets: 'N',
    CreditHold: 'N',
    TrackQBL: 'y',
    CutoffCodeDay: [null],
    ComboPSBL: 'N',
    BlindTally: [null],
    PreventConsolidation:'N'

  
       
    });
  }

  closeDialog(){
    // Write your stuff here
   this.dialogRef.close(); // <- Close the mat dialog
  }

}
