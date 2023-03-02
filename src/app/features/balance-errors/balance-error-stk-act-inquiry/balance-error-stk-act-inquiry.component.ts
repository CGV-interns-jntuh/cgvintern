import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-balance-error-stk-act-inquiry',
  templateUrl: './balance-error-stk-act-inquiry.component.html',
  styleUrls: ['./balance-error-stk-act-inquiry.component.css']
})
export class BalanceErrorStkActInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'date',
    'storer',
    'reference',
    'wrBL',
    'description',
    'amount',
    'balance',
    
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      date:'-',
      storer:'',
      reference:'',
      wrBL:'',
      description:'Opening Balance',
      amount:'',
      balance:'0',


     
    },
    {
      date:'-',
      storer:'',
      reference:'',
      wrBL:'',
      description:'No Activity',
      amount:'',
      balance:'0',

    },
    {
      date:'-',
      storer:'',
      reference:'',
      wrBL:'',
      description:'Closing Balance',
      amount:'',
      balance:'0',

    },
  
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
     @Inject(MAT_DIALOG_DATA) public anyvariable: any,
     private dialogRef: MatDialogRef<BalanceErrorStkActInquiryComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      storer:'65 Escobedo plant 65',
      locationAdj:'N',
      start:'12/01/31',
      end:'12/31/21 ',
      item:'AA00000950 TUBE, 1/2 " BLACK  HOSE ASSEMBLY',
     
      
     
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


  // BalanceErrorsActivityInquiryForm(element:any){
  //   this.matDialog.open(BalanceErrorsActivityInquiryComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }
addAttribute(){

}
}
