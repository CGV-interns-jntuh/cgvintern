import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-control-fields',
  templateUrl: './control-fields.component.html',
  styleUrls: ['./control-fields.component.css']
})
export class ControlFieldsComponent implements OnInit {

  form!: FormGroup;
  result: any;
  user = 'NKOHAN';

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ControlFieldsComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      BillLading:'4785732',
      OrderStatus:'BE',
      PickSheetRC:'6',
      BLRC:'4',
      ConsolidationLN:'',
      ConsolidationSN:'',
      EDIFlag:'E',
      EDIChangeFlag:'',
      EDI856ASN:'',
      UCC128Label:'',
      OOEntryDate:'2/13/2018'
     });
  }

  control(){
    
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
