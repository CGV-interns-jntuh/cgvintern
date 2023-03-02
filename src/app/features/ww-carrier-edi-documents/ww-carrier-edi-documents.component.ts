import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { CarrierEdiDocumentsAddComponent } from './carrier-edi-documents-add/carrier-edi-documents-add.component';
import { CarrierEdiDocumentsChangeComponent } from './carrier-edi-documents-change/carrier-edi-documents-change.component';
import { CarrierEdiDocumentsDeleteComponent } from './carrier-edi-documents-delete/carrier-edi-documents-delete.component';

@Component({
  selector: 'app-ww-carrier-edi-documents',
  templateUrl: './ww-carrier-edi-documents.component.html',
  styleUrls: ['./ww-carrier-edi-documents.component.css']
})
export class WwCarrierEdiDocumentsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'SCACCode',
    'IO',
    'DocumentType',
    'ApplicationName',
    'ValidationProgram',
    'MessageFile',
    'Status',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      SCACCode:'SXTI',
      IO:'0',
      DocumentType:214,
      ApplicationName:'',
      ValidationProgram:'',
      MessageFile:'',
      Status:'AC'
     
    
      
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
      SCACCode:'SXTI',
      
      
    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
 
 


  }

  DocumentsChangeForm(element:any){
  this.matDialog.open(CarrierEdiDocumentsChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
     });
   }
  
    DocumentsAddForm(){
      this.matDialog.open(CarrierEdiDocumentsAddComponent, {
          "width": '1000px',
           "maxHeight": '90vh',
         // 'data': element,
         "autoFocus": false                           
        });
        }
      
        DocumentsDeleteForm(element:any){
          this.matDialog.open(CarrierEdiDocumentsDeleteComponent, {
              "width": '1000px',
               "maxHeight": '90vh',
              'data': element,
             "autoFocus": false                           
            });
            }
          
                    

 addAttribute(){

}

}
