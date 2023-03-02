import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { ControllBatchFileConstraintsComponent } from './controll-batch-file-constraints/controll-batch-file-constraints.component';
import { ControllBatchFileCreateComponent } from './controll-batch-file-create/controll-batch-file-create.component';
import { ControllBatchFileDeleteComponent } from './controll-batch-file-delete/controll-batch-file-delete.component';
import { ControllBatchFileEditComponent } from './controll-batch-file-edit/controll-batch-file-edit.component';

@Component({
  selector: 'app-controll-batch-file',
  templateUrl: './controll-batch-file.component.html',
  styleUrls: ['./controll-batch-file.component.css']
})
export class ControllBatchFileComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Storer',
    'SeqNumber',
    'MinimumDemandQuantity',
    'MaximumLinesOrder',
    'MaximumQuantityOn_Order',
    'MixedCarriers',
    'MixShipDays',
    'BatchSize',
    'ShipDaysForward',
    'ST',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      Storer:774,
      SeqNumber:10,
      MinimumDemandQuantity:1,
      MaximumLinesOrder:10,
      MaximumQuantityOn_Order:999,
      MixedCarriers:'Y',
      MixShipDays:'Y',
      BatchSize:10,
      ShipDaysForward:99,
      ST:'AC',

      
    },
    {
      Storer:8026,
      SeqNumber:5,
      MinimumDemandQuantity:1,
      MaximumLinesOrder:2,
      MaximumQuantityOn_Order:999,
      MixedCarriers:'Y',
      MixShipDays:'Y',
      BatchSize:5,
      ShipDaysForward:99,
      ST:'AC',
     
     
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
      Storer_Number:'',
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
  }

  controllBatchFileAddForm(){
    this.matDialog.open(ControllBatchFileCreateComponent, {
      "width": '5000px',
      "maxHeight": '90vh',
     // 'data': element,
      "autoFocus": false
    });

  }

  controllBatchFileChangeForm(element:any){
    this.matDialog.open(ControllBatchFileEditComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }
  
  controllBatchFileDeleteForm(element:any){
    this.matDialog.open(ControllBatchFileDeleteComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  controllBatchFileConsttraintForm(element:any){
    this.matDialog.open(ControllBatchFileConstraintsComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }
 
addAttribute(){

}

}
