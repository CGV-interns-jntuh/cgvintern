import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';
import { ConsigneeItemsAddComponent } from './consignee-items-add/consignee-items-add.component';
import { ConsigneeItemsChangeComponent } from './consignee-items-change/consignee-items-change.component';

@Component({
  selector: 'app-ww-consignee-items',
  templateUrl: './ww-consignee-items.component.html',
  styleUrls: ['./ww-consignee-items.component.css']
})
export class WwConsigneeItemsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'Storer',
    'Consignee',
    'StorerItemCode',
    'BuyerItemCode',
    'St',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      Storer:'604',
      Consignee:'RICOH',
      StorerItemCode:'LONG ITEM1',
      BuyerItemCode:'TBP88G',
      St:'AC',
     
    
      
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
      Item:'',
      Consignee:'',
      BuyerItem:'',
      
    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/consignee/read']);
 
 


  }

  ConsigneeItemChangeForm(element:any){
  this.matDialog.open(ConsigneeItemsChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
     });
   }
   ConsigneeItemsAddForm(){
      this.matDialog.open(ConsigneeItemsAddComponent, {
          "width": '1000px',
           "maxHeight": '90vh',
        //  'data': element,
         "autoFocus": false                           
        });
        }
      
         
                    

 addAttribute(){

}


}
