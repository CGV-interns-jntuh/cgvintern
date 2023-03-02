import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-consinee-comments',
  templateUrl: './consinee-comments.component.html',
  styleUrls: ['./consinee-comments.component.css']
})
export class ConsineeCommentsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'ID',
    'Key',
    'Tp',
    'Seq',
    'Comment',
    'Actions' 
  ];

  dataSource:any=[]

  duplicateSource:any =[
    {
      Id:'CO',
      Key:'ABB302S50225',
      Tp:'',
      Seq:'',
      Comment:'AAA'
    },
    {
      Id:'CO',
      Key:'ABB302S50226',
      Tp:'',
      Seq:'',
      Comment:'AAB'
    }
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ConsineeCommentsComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      FileId:'',
      Key:'',
      SubType:''
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys/consignee']);
  }

  addComment(){
    
  }

  consigneeCUpdateForm(element:any){
   

  }

  consigneeCDeleteForm(element:any){
    
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
