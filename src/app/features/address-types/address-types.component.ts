import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { AddressTypeAddComponent } from './address-type-add/address-type-add.component';
import { AddressTypeChangeComponent } from './address-type-change/address-type-change.component';
import { AddressTypeDeleteComponent } from './address-type-delete/address-type-delete.component';

@Component({
  selector: 'app-address-types',
  templateUrl: './address-types.component.html',
  styleUrls: ['./address-types.component.css']
})
export class AddressTypesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'AddressType',
    'Description',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      addressType:'BILT',
      description:'Bill To Address',
    
      
    },
    {
      addressType:'BLDG',
      description:'Building Number',
    
      
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
      addressType:'',
    
    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys']);
 
 


  }

  AddressTypeChangeForm(element:any){
     this.matDialog.open(AddressTypeChangeComponent, {
       "width": '1000px',
       "maxHeight": '90vh',
       'data': element,
       "autoFocus": false                           
     });
   }
  
    AddressTypeDeleteForm(element:any){
    this.matDialog.open(AddressTypeDeleteComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  
  
  AddressTypeAddForm(element:any){
    this.matDialog.open(AddressTypeAddComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
 
 
addAttribute(){

}

}
