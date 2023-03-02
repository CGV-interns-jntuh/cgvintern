import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-auto-rates',
  templateUrl: './storer-auto-rates.component.html',
  styleUrls: ['./storer-auto-rates.component.css']
})
export class StorerAutoRatesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Storer_Number',
    'Name',
    'Days_Between_increase',
    'Last_increase',
    'Increase_Percentage',
    'Ntfy',
    'Opt',
   
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Storer_Number:69,
      Name:'ACH',
      Days_Between_increase:'',
      Last_increase:'01/01/40',
      increase_percentage:'',
      Ntfy:'N',
      Opt:'',
    },
    {
      Storer_Number:100,
      Name:'OCS Test Storer',
      Days_Between_increase:'',
      Last_increase:'01/01/40',
      increase_percentage:'',
      Ntfy:'N',
      Opt:'',
    }
  
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerAutoRatesComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Storer_Number:'69',
    Storer_name:'',
    Building:'',
    Only_Active:'',
   
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }
  closeDialog(){
    this.dialogRef.close();
  }


}
