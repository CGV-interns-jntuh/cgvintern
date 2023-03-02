import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-storer-auto-schedule-procres-error',
  templateUrl: './storer-auto-schedule-procres-error.component.html',
  styleUrls: ['./storer-auto-schedule-procres-error.component.css']
})
export class StorerAutoScheduleProcresErrorComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Storer_Number',
    'Process',
    'Last_Emailed',
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
     private dialogRef: MatDialogRef<StorerAutoScheduleProcresErrorComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      Storer:11,
      Process:'TESTMSG'
      
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys']);
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
