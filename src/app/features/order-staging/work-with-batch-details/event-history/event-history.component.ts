import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-event-history',
  templateUrl: './event-history.component.html',
  styleUrls: ['./event-history.component.css']
})
export class EventHistoryComponent implements OnInit {

  form!:FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'date',
    'time',
    'event',
    'received',
    'transmitted',
    'sts'
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      date:'70248318',
      time:'07672',
      event:'011819',
      received:'BK',
      transmitted:'PA',
      sts:'1C (1)'
    },
    {
      date:'70248318',
      time:'07672',
      event:'011819',
      received:'BK',
      transmitted:'PA',
      sts:'1C (1)'
    },

    {
      date:'70248318',
      time:'07672',
      event:'011819',
      received:'BK',
      transmitted:'PA',
      sts:'1C (1)'
    },

    {
      date:'70248318',
      time:'07672',
      event:'011819',
      received:'BK',
      transmitted:'PA',
      sts:'1C (1)'
    },

    {
      date:'70248318',
      time:'07672',
      event:'011819',
      received:'BK',
      transmitted:'PA',
      sts:'1C (1)'
    },

    {
      date:'70248318',
      time:'07672',
      event:'011819',
      received:'BK',
      transmitted:'PA',
      sts:'1C (1)'
    }
 
  ]
  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<EventHistoryComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.anyvariable)
    this.form= this.fb.group({
      
      billOfLading:'4785732' ,
      storer:'8508 Nission Food',
      consignee:'DOL120129330 DOLLAR Treee/Cowpens Dc11',
     
      
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
