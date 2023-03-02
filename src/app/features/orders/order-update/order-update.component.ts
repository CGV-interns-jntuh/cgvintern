import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<OrderUpdateComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
    BOLNumber:123455238,
    StorerNumber:774,
    Consignee:'CCLLC',
    StorerReference:'MQEOD TESTING',
    PurchaseOrder:'',
    Name:'Codeworks',
    Address:'6388 Fiesta Drive Columbus, OH 43235',
    OrderStatus:'Ps',
  
  
       
    });
  }


  closeDialog(){
    this.dialogRef.close();
  }


  backstorer(){
    
  }

  Update(){

  }
}
