import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-change-rates',
  templateUrl: './storer-change-rates.component.html',
  styleUrls: ['./storer-change-rates.component.css']
})
export class StorerChangeRatesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Item',
    'CM',
    'RateType',
    'ChangeType',
    'Amount',
    'BS',
    'Sch_Eff_Date',
    'St',
    'Opt',
    
   
  ];

  dataSource:any=[]
  

  duplicateSource:any =[
  
   
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerChangeRatesComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Storer_Number:69,
    Item:'',
    Sch_EffectiveDate:'',
    Status:'',
    
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['order/details']);
  }


  closeDialog(){
    this.dialogRef.close();
  }

 

}
