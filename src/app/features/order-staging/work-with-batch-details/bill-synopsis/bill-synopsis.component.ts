import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-bill-synopsis',
  templateUrl: './bill-synopsis.component.html',
  styleUrls: ['./bill-synopsis.component.css']
})
export class BillSynopsisComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<BillSynopsisComponent>
  ) { }

  displayedColumns: string[] = [
    'Qty Ord',
    'Qty Shp',
    'Item/Description',
    'Hz',
    'Cubes',
    'Weight'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      QtyOrd:'630',
      QtyShp:'630',
      ItemDescription:'08273 CM Teriyaki Beef',
      Hz:'',
      Cubes:'',
      Weight:'1732.5'
    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      BLNo:'4785732',
      Sts:'PS',
      Stop:'',
      Storer:'Nissan Foods',
      LoadNo:'14',
      DockAppt:'',
      ShipDate:'',
      Arrival:'',
      Carrier:'',
      ProNo:'',
      PONo:'',
      Pieces:'4160',
      Cubes:'',
      RefNo:'SO-0323894',
      Weight:'22384.90',
      Zone:'',
      CHEP:'',
      ASN:'',
      UCC128:'',
      InvNo:'',
      ShipType:'02',
      freightCode:'PS'

    })

    this.dataSource = this.duplicateSource;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
