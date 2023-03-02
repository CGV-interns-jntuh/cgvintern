import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-application-module',
  templateUrl: './application-module.component.html',
  styleUrls: ['./application-module.component.css']
})
export class ApplicationModuleComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Number',
    'Sequence',
    'Module_Name',
    'Opt',
   
   
    
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Number:12,
      Sequence:'10',
      Module_Name:'Overview',
     
     
     
      
     
    },
    {
      Number:8,
      Sequence:'100',
      Module_Name:'Inbound Files',
     
     
     
      
     
    },
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
   // private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ApplicationModuleComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Application:'File Definitions',
  
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    //this.router.navigate(['/main-nav/tallys']);
    this.dialogRef.close();
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
