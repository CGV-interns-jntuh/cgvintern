import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-ship-confirm',
  templateUrl: './ship-confirm.component.html',
  styleUrls: ['./ship-confirm.component.css']
})
export class ShipConfirmComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ShipConfirmComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      BillNo:'4785732',
      Storer:'8508 Nissen Foods',
      Consignee:'O',
      ProNumber:'',
      Carrier:'DOL120129330',
      ShipType:'2 Common Carrier',
      ShipDateTime:'12/27/22 4:16',
      ShipDateChgCode:'',
      LodeCode:'',
      LoadQuantity:'',
      CHEpPalletQuantity:'',
      ManifestNo:'',
      MasterRefNo:'',
      EquipmentNo:'',
      LinkSequence:'',
      Seals:'',
      FreightChg:''
     });
  }

  confirm(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
