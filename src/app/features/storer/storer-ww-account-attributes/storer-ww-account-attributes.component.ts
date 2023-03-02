import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { StorerAddAccountAttributeComponent } from './storer-add-account-attribute/storer-add-account-attribute.component';
import { StorerEditAccountAttributeComponent } from './storer-edit-account-attribute/storer-edit-account-attribute.component';

@Component({
  selector: 'app-storer-ww-account-attributes',
  templateUrl: './storer-ww-account-attributes.component.html',
  styleUrls: ['./storer-ww-account-attributes.component.css']
})
export class StorerWwAccountAttributesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Attribute',
    'Attribute_Description',
    'Opt',
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Attribute:'FRTSURCHG',
      Attribute_Description:'Freight Surcharge Amount',
      Opt:'',
     
    },
    {
      Attribute:'KNVERIFY',
      Attribute_Description:'KNVERIFY',
      Opt:'',
     
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
      Attribute:'',
      
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/storer']);
  }

  MaintainAttributesaddForm(){
    this.matDialog.open(StorerAddAccountAttributeComponent, {
      "width": '5000px',
      "maxHeight": '90vh',
     // 'data': element,
      "autoFocus": false
    });

  }

  MaintainAttributes1editForm(element:any){
    this.matDialog.open(StorerEditAccountAttributeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
 
  }

  AttributesComponent(element:any){
    this.router.navigate(['/main-nav/tallys/attributes',element]);
  }
addAttribute(){

}


}
