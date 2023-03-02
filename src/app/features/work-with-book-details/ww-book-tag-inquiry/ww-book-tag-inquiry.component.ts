import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-book-tag-inquiry',
  templateUrl: './ww-book-tag-inquiry.component.html',
  styleUrls: ['./ww-book-tag-inquiry.component.css']
})
export class WwBookTagInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
   'TagNumber',
   'Team',
   'Counted',
   'Bucket',
 
    
   
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
    private dialogRef: MatDialogRef<WwBookTagInquiryComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
     

      
      
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/read/tallys']);
  }

  // BookDatialsChangeForm(element:any){
  //   this.matDialog.open(BookDatialsTagInquiryComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }
addAttribute(){

}

}
