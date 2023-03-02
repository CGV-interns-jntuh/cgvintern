import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { StorerAutoScheduleProcresErrorComponent } from './storer-auto-schedule-procres-error/storer-auto-schedule-procres-error.component';
import { StorerAutoSchedulingProceesAddComponent } from './storer-auto-scheduling-procees-add/storer-auto-scheduling-procees-add.component';
import { StorerAutoSchedulingProceesUpdateComponent } from './storer-auto-scheduling-procees-update/storer-auto-scheduling-procees-update.component';

@Component({
  selector: 'app-storer-auto-scheduling-procees',
  templateUrl: './storer-auto-scheduling-procees.component.html',
  styleUrls: ['./storer-auto-scheduling-procees.component.css']
})
export class StorerAutoSchedulingProceesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'StorerNumber',
    'Process',
    'Auto',
    'Date',
    'LastRunTime',
    'Min',
    'intervalOffset',
    'Date1',
    'NextRunTime-',
    'Stat',
    'Opt',
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      StorerNumber:11,
      Process:'TESTMSG',
      Auto:'N',
      Date:'10/31/19',
      LastRunTime:'11:38',
      Min:10,
      intervalOffset:3,
      Date1:'12/02/22',
      NextRunTime:'09:00',
      Stat:'AC',
     
     
    },
   
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    // @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    // private dialogRef: MatDialogRef<AttributesComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      Storer:'',
      Process:'',
      AutoProcess:'',
      Status:'AC',
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/storer']);
  }

  storerAutoSchdulingAndProcessUpdate(storer: any) {
    // this.router.navigate(['/main-nav/storer/autoScheduleProcess']);
     this.matDialog.open(StorerAutoSchedulingProceesUpdateComponent, {
       width: '1000px',
       maxHeight: '80vh',
 
       data: storer,
       autoFocus: false,
     });
   }

   storerAutoSchdulingAndProcessAdd() {
    // this.router.navigate(['/main-nav/storer/autoScheduleProcess']);
     this.matDialog.open(StorerAutoSchedulingProceesAddComponent, {
       width: '1000px',
       maxHeight: '80vh',
 
     //  data: storer,
       autoFocus: false,
     });
   }

   storerAutoSchdulingAndProcessError() {
    // this.router.navigate(['/main-nav/storer/autoScheduleProcess']);
     this.matDialog.open(StorerAutoScheduleProcresErrorComponent, {
       width: '1000px',
       maxHeight: '80vh',
 
     //  data: storer,
       autoFocus: false,
     });
   }
  
   AttributesComponent(element:any){
    this.router.navigate(['tallys/attributes',element]);
  }
addAttribute(){

}


}
