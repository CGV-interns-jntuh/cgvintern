import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-item-adjustment-inquiry',
  templateUrl: './item-adjustment-inquiry.component.html',
  styleUrls: ['./item-adjustment-inquiry.component.css']
})
export class ItemAdjustmentInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Location',
    'F',
    'LotCodes',
    'LotReceived',
    'Actual',
    'Avail',
    'Commit',
    
    
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
     LotCodes:'Item Totals',
    }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable:any,
     private dialogRef:MatDialogRef<ItemAdjustmentInquiryComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
    Storer:'0013 Neils Item Storer',
    Item:' CPBKLT1  SAMPLE DISP1 BOOKLET ',
    UPC:'',
    In_Transit:'0',
    FutureAllocated:'0',
    Location:'',
    

    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  closeDialog(){
       this.dialogRef.close();
  }

  onBack() {
    this.router.navigate(['item/adjustment']);
  }


}
