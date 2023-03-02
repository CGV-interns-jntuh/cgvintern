import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-location-status-inquiry',
  templateUrl: './location-status-inquiry.component.html',
  styleUrls: ['./location-status-inquiry.component.css']
})
export class LocationStatusInquiryComponent implements OnInit {

  form!: FormGroup;
  totalA: Number = 0;


  constructor(
    public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LocationStatusInquiryComponent>

  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
     building:'M&W DISTRIBUTION #1',
     location:'1 A/1',
     palletsHighDeep:'',
     heightwidthdepth:''
    });
  }

  displayedColumns: string[] = [
    'Storer/Item',
    'Lot Codes',
    'Lot Received',
    'Actual',
    'Avail',
    'Commit'
   
  ];

  dataSource = [
    {
      StorerItem:'5002 170',
      LotCodes:'20190109',
      LotReceived:'2/14/18',
      Actual:120,
      Avail:128,
     Commit:''
    },
  {
    StorerItem:'5002 244',
    LotCodes:'20200209',
    LotReceived:'2/14/18',
    Actual:90,
    Avail:90,
    Commit:''
  }];

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

 

  totalActual(){

    var totalAc = 0 ;
    for(let i=0;i<this.dataSource.length; i++)
    {
      console.log('totalAc')
      console.log(totalAc)
      totalAc= Number(this.dataSource[i].Actual) + Number(totalAc) 
    }

    return totalAc;
  }

  totalAvail(){

    var totalAv = 0 ;
    for(let i=0;i<this.dataSource.length; i++)
    {
      console.log('totalAv')
      console.log(totalAv)
      totalAv = Number(this.dataSource[i].Avail) + Number(totalAv) 
    }

    return totalAv;
  }
}
