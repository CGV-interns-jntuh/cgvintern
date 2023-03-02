import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-work-with-errors',
  templateUrl: './storer-work-with-errors.component.html',
  styleUrls: ['./storer-work-with-errors.component.css']
})
export class StorerWorkWithErrorsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'StorerNumber',
    'Item',
    'Location',
    'ErrorMessage',
    'DateWritten',
    'Opt',
   
    
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      StorerNumber:65,
      Item:'AAAB001150 HOSE,FUEL,NULL',
      Location:100,
      ErrorMessage:'LCE0002',
      DateWritten:'11/23/22',
      Opt:'',
     
      
     
    },
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<StorerWorkWithErrorsComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Storer:'',
    Item:'',
   


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
