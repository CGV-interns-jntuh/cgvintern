import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-serialized-details',
  templateUrl: './serialized-details.component.html',
  styleUrls: ['./serialized-details.component.css']
})
export class SerializedDetailsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'SerialLPNumber',
    'Item',
    'Lots',
    'Opt',
 
    
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
  
{
  SerialLPNumber:'612DP004790481',
  Item:'300',
  Lots:'02162018',

},
  
{
  SerialLPNumber:'612DP0047904810001',
  Item:'400',
  Lots:'02192018',

},
    
  ]

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
     @Inject(MAT_DIALOG_DATA) public anyvariable: any,
     private dialogRef: MatDialogRef<SerializedDetailsComponent>
    
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
     SerialLP:'',
     NotFound:'',
     ConditionChange:'',
     Location:'',
     Recounts:'',
     Relocations:'',
     
   
      
     
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


  
  // BookDatialsDetailsForm(element:any){
  //   this.matDialog.open(SerializedDetailsComponent, {
  //     "width": '1000px',
  //     "maxHeight": '90vh',
  //     'data': element,
  //     "autoFocus": false
  //   });
  

  // }
addAttribute(){

}


}
