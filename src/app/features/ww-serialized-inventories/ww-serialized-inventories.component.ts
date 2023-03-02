import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { BookToCountComponent } from './book-to-count/book-to-count.component';
import { SerialCountComponent } from './serial-count/serial-count.component';
import { SerialWorksheetComponent } from './serial-worksheet/serial-worksheet.component';
import { SerializedAdjustmentLogComponent } from './serialized-adjustment-log/serialized-adjustment-log.component';
import { SerializedBookSynopsysComponent } from './serialized-book-synopsys/serialized-book-synopsys.component';
import { SerializedDetailsComponent } from './serialized-details/serialized-details.component';

@Component({
  selector: 'app-ww-serialized-inventories',
  templateUrl: './ww-serialized-inventories.component.html',
  styleUrls: ['./ww-serialized-inventories.component.css']
})
export class WwSerializedInventoriesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'BookName',
    'Date',
    'Description',
    'Sts',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      BookName:'JKPL' ,
      Date:'12/07/20 ',
      Description:'Extract of Storer 0774 on 12/07/20',
      Sts:'PS',
     

      
      
    },
   
    

  ]
  //matDialog: any;

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
      book:'',
    

    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
 
 


   }

   SerializedDetailsForm(element:any){
    this.matDialog.open(SerializedDetailsComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  SerializedWorkSheetForm(element:any){
    this.matDialog.open(SerialWorksheetComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  SerializedCountForm(element:any){
    this.matDialog.open(SerialCountComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  
  SerializedLogForm(element:any){
    this.matDialog.open(SerializedAdjustmentLogComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  SerializedSynopsysForm(element:any){
    this.matDialog.open(SerializedBookSynopsysComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  SerializedBookCountForm(element:any){
    this.matDialog.open(BookToCountComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
addAttribute(){

}

}
