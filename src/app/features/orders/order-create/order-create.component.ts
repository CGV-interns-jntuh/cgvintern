import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<OrderCreateComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
    BillNo:'',
    RefNo:'',
    P_O_NO:'',
    PRONo:'',
    Consignee:'',
    Carrier:'',
    ShipDates:'',
    Status:'',
    Bldg:'',
    Storer:'',
    Open_All:'',
    Trk:'',
    Broker:'',

  
       
    });
  }


  closeDialog(){
    this.dialogRef.close();
  }


  backstorer(){
    
  }

  create(){

  }

}
