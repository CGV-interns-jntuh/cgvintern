import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-serialized-book-synopsys',
  templateUrl: './serialized-book-synopsys.component.html',
  styleUrls: ['./serialized-book-synopsys.component.css']
})
export class SerializedBookSynopsysComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
   'Book',
   'Number',
   'Quantity'

 
    
   
  ];

  DataSource:any =[]
  DataSource1:any =[]
  displayedColumns1: string[] = [
  
    'Count',
    'Number',
    'Pct',
    'Quantity',
    'Pct1',
 
  
     
    
   ];

   duplicateSource1:any=[
    {
      Book:'Orginal Lines',
      Number:'82',
      Quantity:'8632'
    }
  ]


  duplicateSource2:any =[
  
  {
    Count:'Lines Counted',
    Number:10,
    Pct:12,
    Quantity:220,
    Pct1:2,
  }
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
     @Inject(MAT_DIALOG_DATA) public anyvariable: any,
     private dialogRef: MatDialogRef<SerializedBookSynopsysComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
     

      
      
     
    })

    this.DataSource = new MatTableDataSource(this.duplicateSource1);
    this.DataSource.paginator = this.paginator;

    this.DataSource1 = new MatTableDataSource(this.duplicateSource2);
  }

  onBack() {
    this.router.navigate(['/main-nav/serialized-inventories/read']);
  }

  // BookDatialsChangeForm(element:any){
  //   this.matDialog.open(SerializedSynopsysComponent, {
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
