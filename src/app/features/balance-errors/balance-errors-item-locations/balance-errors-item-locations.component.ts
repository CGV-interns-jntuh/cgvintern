import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-balance-errors-item-locations',
  templateUrl: './balance-errors-item-locations.component.html',
  styleUrls: ['./balance-errors-item-locations.component.css']
})
export class BalanceErrorsItemLocationsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'bldNbr',
    'floor',
    'aisle',
    'slot',
    'lot',
    'code1',
    'firstReceived',
    'totalCapacity',
    'onHand',
    'addlCapacity',
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
    private dialogRef: MatDialogRef<BalanceErrorsItemLocationsComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      Storer:'0065 Escobedo Plant 65 ',
      Item:'AA0000950 TUBE, 1/2" BLACK HO',
      Location:'',
      
      
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }


  // ItemsLocationsForm(element:any){
  //   this.matDialog.open(ItemsLocationsComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }

  closeDialog(){
    this.dialogRef.close();
  }

  addAttribute(){

}

}
