import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-application-authorities',
  templateUrl: './application-authorities.component.html',
  styleUrls: ['./application-authorities.component.css']
})
export class ApplicationAuthoritiesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'User',
    'Authority',
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
    private dialogRef: MatDialogRef<ApplicationAuthoritiesComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Object:'AP WDLS Yard Management',
  
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog(){
    this.dialogRef.close();
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys']);
  }

 

}
