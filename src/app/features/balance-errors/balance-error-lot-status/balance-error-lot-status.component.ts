import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-balance-error-lot-status',
  templateUrl: './balance-error-lot-status.component.html',
  styleUrls: ['./balance-error-lot-status.component.css']
})
export class BalanceErrorLotStatusComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Location',
    'Available',
 
    
   
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
    private dialogRef: MatDialogRef<BalanceErrorLotStatusComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      Storer:'65 Escobedo plant 65',
      Item:'AA00000900 TUBE,ASSY 1/2" OD BLACK'
      
      
     
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


  
  // BoxContentsDeactiveForm(element:any){
  //   this.matDialog.open(BalanceErrorsInquiryComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }
addAttribute(){

}

}
