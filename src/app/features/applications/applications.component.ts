import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { ApplicationAddComponent } from './application-add/application-add.component';
import { ApplicationAuthoritiesComponent } from './application-authorities/application-authorities.component';
import { ApplicationChangeComponent } from './application-change/application-change.component';
import { ApplicationModuleComponent } from './application-module/application-module.component';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'APPNumber',
    'Application_Name',
    'Sequence',
    'Opt',
   
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      APPNumber:1,
      Application_Name:'WDLS Warehouse Management',
      Sequence:'1',
      
    },
    {
      APPNumber:2,
      Application_Name:'WDLS Traffic System',
      Sequence:'2',
     
     
     
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
      Application_Number:'',
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }

  ApplicationsAddForm(){
    this.matDialog.open(ApplicationAddComponent, {
      "width": '5000px',
      "maxHeight": '90vh',
     // 'data': element,
      "autoFocus": false
    });

  }

  applicationChangeForm(element:any){
    this.matDialog.open(ApplicationChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  applicationModuleForm(element:any){
    this.matDialog.open(ApplicationModuleComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  applicationAuthoritiesForm(element:any){
    this.matDialog.open(ApplicationAuthoritiesComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

  AttributesComponent(element:any){
    this.router.navigate(['tallys/attributes',element]);
  }
addAttribute(){

}


}
