import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { InventoryBookCountListingComponent } from './inventory-book-count-listing/inventory-book-count-listing.component';
import { InventoryBookDeleteComponent } from './inventory-book-delete/inventory-book-delete.component';
import { InventoryBookReservePostComponent } from './inventory-book-reserve-post/inventory-book-reserve-post.component';
import { InventoryBookSynopsysComponent } from './inventory-book-synopsys/inventory-book-synopsys.component';
import { InventoryBookToCountComponent } from './inventory-book-to-count/inventory-book-to-count.component';
import { InventoryBooksMissingCountComponent } from './inventory-books-missing-count/inventory-books-missing-count.component';
import { InventoryBooksWorkSheetComponent } from './inventory-books-work-sheet/inventory-books-work-sheet.component';
import { InventoryEnterCountComponent } from './inventory-enter-count/inventory-enter-count.component';
import { InventoryLpBookToCountComponent } from './inventory-lp-book-to-count/inventory-lp-book-to-count.component';
import { InventoryMaintainBookComponent } from './inventory-maintain-book/inventory-maintain-book.component';

@Component({
  selector: 'app-inventory-books',
  templateUrl: './inventory-books.component.html',
  styleUrls: ['./inventory-books.component.css']
})
export class InventoryBooksComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'bookName',
    'date',
    'description',
    'sts',
    'opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      bookName:'JKPL' ,
      date:'12/07/20 ',
      description:'Extract of Storer 0774 on 12/07/20',
      sts:'PS',
      
      
    },
    {
      bookName:'JKOHANTEST' ,
      date:'09/19/19 ',
      description:'Extract of Storer 0100 on 09/19/19',
      sts:'CV',
      
      
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
      bookName:'',

    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys']);
 
 


   }

   InventoriesMissingCountsForm(element:any){
    this.matDialog.open(InventoryBooksMissingCountComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
 
 
  InventoriesWorkSheetsForm(element:any){
    this.matDialog.open(InventoryBooksWorkSheetComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  
  }

  InventoryBookSynopsysForm(element:any){
    this.matDialog.open(InventoryBookSynopsysComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  
  }

  InventoryBookToCountForm(element:any){
    this.matDialog.open(InventoryBookToCountComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  
  }

  InventoryBookCountListForm(element:any){
    this.matDialog.open(InventoryBookCountListingComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  
  }

  InventoryBookDeleteForm(element:any){
    this.matDialog.open(InventoryBookDeleteComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  
  }

  InventoryBookReservePostForm(element:any){
    this.matDialog.open(InventoryBookReservePostComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  
  }

  InventoryMaintainBookForm(element:any){
    this.matDialog.open(InventoryMaintainBookComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  
  }

  InventoryEnterCountForm(element:any){
    this.matDialog.open(InventoryEnterCountComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  
  }

  InventoryLpBookToCountForm(element:any){
    this.matDialog.open(InventoryLpBookToCountComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  
  }

  addAttribute(){

}


}
