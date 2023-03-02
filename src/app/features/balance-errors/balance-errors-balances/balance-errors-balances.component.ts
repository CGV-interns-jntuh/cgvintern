import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-balance-errors-balances',
  templateUrl: './balance-errors-balances.component.html',
  styleUrls: ['./balance-errors-balances.component.css']
})
export class BalanceErrorsBalancesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'lotCode',
    'dateWritten',
    'typePWD',
    'on',
    'Hand',
    'Allocated',
    'Committed',
    'Damaged',
    'opt',
 
    
   
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
    private dialogRef: MatDialogRef<BalanceErrorsBalancesComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      Storer:'65 ',
      Item:'AA0000950 TUBE, 1/2" BLACK HOSE ASSEMBL'
      
      
     
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


  
  // ItemBalanceForm(element:any){
  //   this.matDialog.open(ItemBalanceComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }
addAttribute(){

}

}
