import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-balance-errors-adjustments',
  templateUrl: './balance-errors-adjustments.component.html',
  styleUrls: ['./balance-errors-adjustments.component.css']
})
export class BalanceErrorsAdjustmentsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Number',
    'L Date',
    'Lot Codes',
    'Location',
    'Bkt',
    'Qty',
    'Action'
  ];

  

  dataSource:any=[]

  duplicateSource:any =[
    {
      Number:'',
      LDate:'',
      LotCodes:'',
      Location:'',
      Bkt:'',
      Qty:''
    },

  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<BalanceErrorsAdjustmentsComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      Storer:'65',
      Item:'AA00000900 TUBE, ASSY 1/2" OD BLACK ',
      Type:'',
      Location:'',
      Date:'',
      Lots:''
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
