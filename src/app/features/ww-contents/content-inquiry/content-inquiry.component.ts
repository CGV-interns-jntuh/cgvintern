import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-content-inquiry',
  templateUrl: './content-inquiry.component.html',
  styleUrls: ['./content-inquiry.component.css']
})
export class ContentInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Date',
    'Time',
    'User',
    'Description',
    'Sts',
    'Opt',
 
    
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
  
{
  Date:'2016-05-10',
  Time:'10:13:56',
  User:'JBICE',
  Description:'ITI',
  Sts:'AC',

},
  

    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
     @Inject(MAT_DIALOG_DATA) public anyvariable: any,
     private dialogRef: MatDialogRef<ContentInquiryComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
     BoxNumber:'JAMES BOX 2',
     Dates:'T',
     Content:'305163IN',
     User:'',
     Reason:'',
     Account:'JAMES'
     
   
      
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/contents/read']);
  }


  
  // BookDatialsDetailsForm(element:any){
  //   this.matDialog.open(BoxContentInquiryComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }
addAttribute(){

}


}
