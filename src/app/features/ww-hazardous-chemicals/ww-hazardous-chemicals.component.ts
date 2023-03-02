import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../tallys/iheader.service';
import { HazardousChemicalsAddComponent } from './hazardous-chemicals-add/hazardous-chemicals-add.component';
import { HazardousChemicalsChangeComponent } from './hazardous-chemicals-change/hazardous-chemicals-change.component';

@Component({
  selector: 'app-ww-hazardous-chemicals',
  templateUrl: './ww-hazardous-chemicals.component.html',
  styleUrls: ['./ww-hazardous-chemicals.component.css']
})
export class WwHazardousChemicalsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'ChemicalNumber',
    'Proper',
    'Name',
    'Opt',
   
  ];

  dataSource:any=[]


  duplicateSource:any =[
    {
      ChemicalNumber:' 1 ',
      Proper:'FLAMMABLE AND',
      Name:'COMBUSTIBLE LIQUID'
 
    
      
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
      properName:'',
      chemical:'',
      
    
     
    })

    this.dataSource = new MatTableDataSource(this.duplicateSource);
    this.dataSource.paginator = this.paginator;
  }

  onBack() {
    this.router.navigate(['/main-nav/tallys/read']);
 
 


  }

  ChemicalsChangeForm(element:any){
  this.matDialog.open(HazardousChemicalsChangeComponent, {
      "width": '1000px',
      "maxHeight": '90vh',
      'data': element,
      "autoFocus": false                           
     });
   }
  
    ChemicalsAddForm(element:any){
      this.matDialog.open(HazardousChemicalsAddComponent, {
          "width": '1000px',
           "maxHeight": '90vh',
          'data': element,
         "autoFocus": false                           
        });
        }
      
         
                    

 addAttribute(){

}

}
