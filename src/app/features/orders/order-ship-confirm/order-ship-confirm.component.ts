import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-order-ship-confirm',
  templateUrl: './order-ship-confirm.component.html',
  styleUrls: ['./order-ship-confirm.component.css']
})
export class OrderShipConfirmComponent implements OnInit {
  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<OrderShipConfirmComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
    billNo:'',
    storer:'',
    consignee:'',
    proNum:'',
    Carrier:'',
    shipType:'',
    shipDateTime:'',
    shipDateChCode:'',
    loadCode:'',
    loadQuantity:'',
    chepPalletQuantity:'',
    manifestNo:'',
    masterRefNo:'',
    equipmentNo:'',
    seals:'',
    freightChg:''
    });
  }


  closeDialog(){
    this.dialogRef.close();
  }


  backstorer(){
    
  }

  confirmShip(){

  }

}
