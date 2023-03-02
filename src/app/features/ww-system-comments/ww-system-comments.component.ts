import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { SystemCommentsAddComponent } from './system-comments-add/system-comments-add.component';
import { SystemCommentsChangeSetComponent } from './system-comments-change-set/system-comments-change-set.component';
import { SystemCommentsChangeComponent } from './system-comments-change/system-comments-change.component';
import { SystemCommentsDeleteComponent } from './system-comments-delete/system-comments-delete.component';

@Component({
  selector: 'app-ww-system-comments',
  templateUrl: './ww-system-comments.component.html',
  styleUrls: ['./ww-system-comments.component.css']
})
export class WwSystemCommentsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'ID',
    'Key',
    'Tp',
    'Seq',
    'Comments',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      ID:'AH' ,
      Key:'0000001 ',
      Tp:'IN',
      Seq:1,
      Comments:'Test Invoice 1 Comment',

      
      
    },
    {
      ID:'AH' ,
      Key:'0000002',
      Tp:'IN',
      Seq:1,
      Comments:'Test Invoice 2 Comment line 2',
      
      
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
      FileID:'',
      Key:'',
      SubType:'',

    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
 
 


   }

   systemCommnetsChangeForm(element:any){
    this.matDialog.open(SystemCommentsChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }
  systemCommentsChangeSetForm(element:any){
    this.matDialog.open(SystemCommentsChangeSetComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }

  systemCommentsDeleteForm(element:any){
    this.matDialog.open(SystemCommentsDeleteComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }

  systemCommentsAddForm(element:any){
    this.matDialog.open(SystemCommentsAddComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }



addAttribute(){

}

}
