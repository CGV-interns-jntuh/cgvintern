import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { WwBookDetailsAddComponent } from '../work-with-book-details/ww-book-details-add/ww-book-details-add.component';
import { WwMasterSerialListAddComponent } from './ww-master-serial-list-add/ww-master-serial-list-add.component';
import { WwMasterSerialListChangeComponent } from './ww-master-serial-list-change/ww-master-serial-list-change.component';

@Component({
  selector: 'app-ww-master-serial-list',
  templateUrl: './ww-master-serial-list.component.html',
  styleUrls: ['./ww-master-serial-list.component.css']
})
export class WwMasterSerialListComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'Serial',
    'Type',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      Serial:'MASTER SERIAL 1 ',
      Type:'TYPE1',
 
    
      
    },
    {
      Serial:'MASTER SERIAL 2 ',
      Type:'TYPE2',
      
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
      Serial:'',
      
    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
 
 


  }

  masterSerialListAddForm(element:any){
  this.matDialog.open(WwMasterSerialListAddComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
     });
   }
   
   masterSerialListChangeForm(element:any){
      this.matDialog.open(WwMasterSerialListChangeComponent, {
          "width": '1000px',
           "maxHeight": '90vh',
          'data': element,
         "autoFocus": false                           
        });
        }
      
         
                    

 addAttribute(){

}


}
