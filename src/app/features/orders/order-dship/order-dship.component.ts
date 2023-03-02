import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-order-dship',
  templateUrl: './order-dship.component.html',
  styleUrls: ['./order-dship.component.css']
})
export class OrderDshipComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<OrderDshipComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      BillNumber:123455235,
      Storer:'1301 Neils Serial Storer' ,
      Consignee:'NKOHAN Neil Kohan',
      Carrier:'AIRB AIRBORNE FREIGHT',
      ProNumber:'',
      ShipDate:'01/01/40',
      ShipTime:''
      
    })
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


}
