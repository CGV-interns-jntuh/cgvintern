import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { ActionRsmsAddComponent } from './action-rsms-add/action-rsms-add.component';
import { ActionRsmsChangeComponent } from './action-rsms-change/action-rsms-change.component';

@Component({
  selector: 'app-action-rsms',
  templateUrl: './action-rsms.component.html',
  styleUrls: ['./action-rsms.component.css']
})
export class ActionRsmsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'Action',
    'Description',
    'LV',
    'ReqEVt',
    'Evt',
    'Sts',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      Action:'CONSPICK',
      Description:'Consolidate Pick Boxes',
      LV:'B',
      ReqEVt:'',
      Evt:'',
      Sts:'AC',
      
    },
    {
      Action:'DELSCSR',
      Description:'Deliver to Customer Service Representative',
      LV:'B',
      ReqEVt:'CSR',
      Evt:'CSR',
      Sts:'AC',
     
     
     
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
      Action:'',
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys']);
  }

  actionRsmsAddForm(){
    this.matDialog.open(ActionRsmsAddComponent, {
      "width": '5000px',
      "maxHeight": '90vh',
     // 'data': element,
      "autoFocus": false
    });

  }

  actionRsmsChangeForm(element:any){
    this.matDialog.open(ActionRsmsChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false
    });
  }

 
addAttribute(){

}

}
