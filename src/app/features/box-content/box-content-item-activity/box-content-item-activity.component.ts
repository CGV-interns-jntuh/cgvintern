import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-box-content-item-activity',
  templateUrl: './box-content-item-activity.component.html',
  styleUrls: ['./box-content-item-activity.component.css']
})
export class BoxContentItemActivityComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'date',
    'time',
    'opt',
    
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      date:'04/09/15',
      time:'14:19:53 CII',

     
    },
  
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<BoxContentItemActivityComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      item:'305141AR',
      fromDate:'',
      toDate:'',
      customer:'JAMES  ',
      box:'',
      
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['tallys']);
  }

  closeDialog(){
    this.dialogRef.close();
  }


  
  // BoxContentsDeactiveForm(element:any){
  //   this.matDialog.open(BoxContentsDeactiveComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }
addAttribute(){

}


}
