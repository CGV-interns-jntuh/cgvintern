import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { WwBookDetailsAddComponent } from './ww-book-details-add/ww-book-details-add.component';
import { WwBookTagInquiryComponent } from './ww-book-tag-inquiry/ww-book-tag-inquiry.component';

@Component({
  selector: 'app-work-with-book-details',
  templateUrl: './work-with-book-details.component.html',
  styleUrls: ['./work-with-book-details.component.css']
})
export class WorkWithBookDetailsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'BookSeq',
    'ItemCode',
    'LotCodes',
    'Location',
    'St',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      BookSeq:1,
      ItemCode:100,
      LotCodes:'02142018-JWK',
      Location:'612 1/3',
      St:'BK'
    
      
    },
    {
      BookSeq:2,
      ItemCode:100,
      LotCodes:'4142019',
      Location:'612 85/125',
      St:'CV'
      
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
      Storer:'',
      Seq:'',
      Item:'',
      Location:'',
      Status:'',
    
    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
  }

  BookDatialsAddForm(){
  this.matDialog.open(WwBookDetailsAddComponent, {
      "width": '1000px',
       "maxHeight": '90vh',
     // 'data': element,
     "autoFocus": false                           
    });
    }

    BookDatialsInquiryForm(){
      this.matDialog.open(WwBookTagInquiryComponent, {
          "width": '1000px',
           "maxHeight": '90vh',
         // 'data': element,
         "autoFocus": false                           
        });
        }

 
addAttribute(){

}


}
