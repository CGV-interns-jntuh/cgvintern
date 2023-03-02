import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-storer-gen869-trigger',
  templateUrl: './storer-gen869-trigger.component.html',
  styleUrls: ['./storer-gen869-trigger.component.css']
})
export class StorerGen869TriggerComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Bill',
    'No',
    'Reference',
    'Number',
    'Consignee',
    'Sts',
    
   
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
    private dialogRef: MatDialogRef<StorerGen869TriggerComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      Storer:63,
    Status:'EN',
    Schedule_To_ShipBy:'',
    
   


    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['storer']);
  }

  closeDialog(){
    this.dialogRef.close();
  }

 

}
