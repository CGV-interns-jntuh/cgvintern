import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { CommentSubCodesAddComponent } from './comment-sub-codes-add/comment-sub-codes-add.component';
import { WwCommentSubcodesChangeComponent } from './ww-comment-subcodes-change/ww-comment-subcodes-change.component';

@Component({
  selector: 'app-ww-comment-subcodes',
  templateUrl: './ww-comment-subcodes.component.html',
  styleUrls: ['./ww-comment-subcodes.component.css']
})
export class WwCommentSubcodesComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'ID',
    'Description',
    'opt',
    'ID1',
    'Description1',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      ID:'BL' ,
      Description:'Bill of Leading ',
      Opt:'',
      ID1:'',
      Description1:'',

      
      
    },
    {
      ID:'CC' ,
      Description:'Control Copy ',
      Opt:'',
      ID1:'',
      Description1:'',
      
      
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
      CommentSubCode:'',
      

    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
  }



   CommentsubcodesAddForm(){
    this.matDialog.open(CommentSubCodesAddComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
     // 'data': element,
      "autoFocus": false                           
    });
  }
  CommentsubcodesChangeForm(element:any){
    this.matDialog.open(WwCommentSubcodesChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
    });
  }



addAttribute(){

}

}
