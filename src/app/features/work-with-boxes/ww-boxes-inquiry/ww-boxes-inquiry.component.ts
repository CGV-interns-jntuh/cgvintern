import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-boxes-inquiry',
  templateUrl: './ww-boxes-inquiry.component.html',
  styleUrls: ['./ww-boxes-inquiry.component.css']
})
export class WwBoxesInquiryComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Request',
    'Line',
    'Activity',
    'Tracking',
    'Number',
    'DateTime',
    'Sts'
 
    
   
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
    private dialogRef: MatDialogRef<WwBoxesInquiryComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      BoxNumber:123,
      Location:'',
      FirstIn:'Unknown',
      Description:'Krissy',
      SecondDesc:'Testing',
      BoxSize:'',
      Reference:'',
      FileType:1,
      AgeClass:'',
      ContentDates:'Unknown -0001-01-01',
      Retention:'',
       ScheduledDestruction:'0001-01-01',
       Customer:1065,
       District:'',
       Building:'',
       CustomerBox:'',
       Dept:'',
       Division:'',
       Alpha:'',
      
      
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }


  
  // BookDatialsSynopsisForm(element:any){
  //   this.matDialog.open(BookDatialsSynopsisComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }

  closeDialog(){
    this.dialogRef.close();
  }

  addAttribute(){

}

}
