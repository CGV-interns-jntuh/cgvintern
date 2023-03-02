import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { ContentAddPressHoldComponent } from './content-add-press-hold/content-add-press-hold.component';
import { ContentChangeComponent } from './content-change/content-change.component';
import { ContentInquiryComponent } from './content-inquiry/content-inquiry.component';
import { ContentItemLabelComponent } from './content-item-label/content-item-label.component';
import { ContentRemovePressHoldComponent } from './content-remove-press-hold/content-remove-press-hold.component';

@Component({
  selector: 'app-ww-contents',
  templateUrl: './ww-contents.component.html',
  styleUrls: ['./ww-contents.component.css']
})
export class WwContentsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'Content',
    'Identifier',
    'Seg',
    'RecordSource',
    'AgeClsBundle',
    'Sts',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      Content:'305163IN',
      Identifier:'',
      Seg:'',
      RecordSource:'RCU25R',
      AgeClsBundle:'',
      Sts:'RCV',
      
     
    
      
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
      ContentID:'',
      Status:'',
      Unbundled:1,
      Bundle:'',
      Sequence:'',
      Bundles:'',
      count:1,
      
      
    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
 
}
  BoxContentChangeForm(element:any){
  this.matDialog.open(ContentChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
     });
   }
   
   BoxContentAddForm(){
      this.matDialog.open(ContentChangeComponent, {
          "width": '1000px',
           "maxHeight": '90vh',
        //  'data': element,
         "autoFocus": false                           
        });
        }
      
        BoxContentLabelForm(element:any){
          this.matDialog.open(ContentItemLabelComponent, {
              "width": '1000px',
               "maxHeight": '90vh',
              'data': element,
             "autoFocus": false                           
            });
            }
            BoxContentHoldForm(element:any){
              this.matDialog.open(ContentAddPressHoldComponent, {
                  "width": '1000px',
                   "maxHeight": '90vh',
                  'data': element,
                 "autoFocus": false                           
                });
                }
              
                BoxContentRemovePressHoldForm(element:any){
                  this.matDialog.open(ContentRemovePressHoldComponent, {
                      "width": '1000px',
                       "maxHeight": '90vh',
                      'data': element,
                     "autoFocus": false                           
                    });
                    }
                    
                    contentsInquiry(element:any){
                      this.matDialog.open(ContentInquiryComponent, {
                          "width": '1000px',
                           "maxHeight": '90vh',
                          'data': element,
                         "autoFocus": false                           
                        });
                        }      

 addAttribute(){

}


}
