import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-boxes-event-inquiry',
  templateUrl: './ww-boxes-event-inquiry.component.html',
  styleUrls: ['./ww-boxes-event-inquiry.component.css']
})
export class WwBoxesEventInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Date',
    'Time',
    'User',
    'Description',
    'Sts',
    'opt',
 
    
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
  
{
  Date:'2016-06-13',
  Time:'13:00:34',
  User:'KPAVER',
  Description:'ITI',
  Sts:'AC',

},
{
  Date:'2016-06-08',
  Time:'11:38:03',
  User:'KPAVER',
  Description:'ITI',
  Sts:'AC',

}
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
     @Inject(MAT_DIALOG_DATA) public anyvariable: any,
     private dialogRef: MatDialogRef<WwBoxesEventInquiryComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
     BoxNumber:123,
     Dates:'T',
     Content:'',
     User:'',
     Reason:'',
     Account:'1065',
      
      
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }


  
  // BookDatialsInquiryForm(element:any){
  //   this.matDialog.open(BookDatialsInquiryComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }

  addAttribute(){

}

closeDialog(){
  this.dialogRef.close();
}


}
