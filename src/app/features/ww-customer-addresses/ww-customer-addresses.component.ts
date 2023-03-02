import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { CustomerAddressesAddComponent } from './customer-addresses-add/customer-addresses-add.component';
import { CustomerAddressesChangeComponent } from './customer-addresses-change/customer-addresses-change.component';

@Component({
  selector: 'app-ww-customer-addresses',
  templateUrl: './ww-customer-addresses.component.html',
  styleUrls: ['./ww-customer-addresses.component.css']
})
export class WwCustomerAddressesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'CustomerNumber',
    'Addrtype',
    'CustomerName',
    'CityStateZip',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      CustomerNumber:'0100' ,
      Addrtype:'PICK',
      CustomerName:'Codeworks',
      CityStateZip:'Columbus,OH 43235'

      
      
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
      CustomerNumber:'0100',
      

    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
 
 


   }



   CustomerAddressesAddForm(element:any){
    this.matDialog.open(CustomerAddressesAddComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  CustomerAddressChangeForm(element:any){
    this.matDialog.open(CustomerAddressesChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }



addAttribute(){

}

}
