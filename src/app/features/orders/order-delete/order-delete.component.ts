import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})
export class OrderDeleteComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
   private dialogRef: MatDialogRef<OrderDeleteComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
    Billoflanding:'123455238',
    Storer:'774 LP Storer',
    Consignee:'CCLLC Codeworks',
    ScheduledShipDate:11_02_22,

  
       
    });
  }


  closeDialog(){
    this.dialogRef.close();
  }


  backstorer(){
    
  }

  delete(){

  }

}
