import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-short-ship',
  templateUrl: './short-ship.component.html',
  styleUrls: ['./short-ship.component.css']
})
export class ShortShipComponent implements OnInit {

  form!:FormGroup
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ShortShipComponent>
  ) { }

  displayedColumns: string[] = [
    'line',
    'item',
    'ordered',
    'available'
    
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      line:'630',
      item:'630',
      ordered:'1732.5',
      available:'aaaa'

    }
  ]

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      billOfLading:'4785732' ,
      storer:'8508 Nission Food',
      consignee:'DOL120129330 DOLLAR Treee/Cowpens Dc11',
      option:'',

    })

    this.dataSource = this.duplicateSource;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

}
