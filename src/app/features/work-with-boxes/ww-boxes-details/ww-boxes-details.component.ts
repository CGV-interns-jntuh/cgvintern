import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-ww-boxes-details',
  templateUrl: './ww-boxes-details.component.html',
  styleUrls: ['./ww-boxes-details.component.css']
})
export class WwBoxesDetailsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Content',
    'Identifier',
    'Seg',
    'RecordSource',
    'AgeCls',
    'Bundle',
    'Sts',
    'Opt',
 
    
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
  
{
  Content:789,
  Identifier:'',
  Seg:'F',
  RecordSource:'',
  AgeCls:'',
  Bundle:'',
  Sts:'ENT',

},
  
{
  Content:789,
  Identifier:'',
  Seg:'G',
  RecordSource:'',
  AgeCls:'',
  Bundle:'',
  Sts:'ENT',

},
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<WwBoxesDetailsComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
     ContentID:'',
     Status:'',
     Unbundled:9,
     Bundle:'',
     Sequence:'',
     Bundles:'',
     Count:9
      
      
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
  }


  
  // BookDatialsDetailsForm(element:any){
  //   this.matDialog.open(BookDatialsDetailsComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });

  
  

  }

