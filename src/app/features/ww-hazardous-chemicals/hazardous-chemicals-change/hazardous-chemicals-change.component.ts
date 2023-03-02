import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-hazardous-chemicals-change',
  templateUrl: './hazardous-chemicals-change.component.html',
  styleUrls: ['./hazardous-chemicals-change.component.css']
})
export class HazardousChemicalsChangeComponent implements OnInit {

  storer: any;
  form!: FormGroup;
  result: any;
  user = 'NKOHAN';
  constructor(public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<HazardousChemicalsChangeComponent>
   ) 
   { }

  ngOnInit(): void {
    this.form = this.fb.group({
  
    ProperName: 'FLAMMMABLE AND COMBUSTIBLE LIQUID',
    ChemicalForm:'TYPE2',
    Concentration:''
  
   
       
    });
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }


  backstorer(){
    
  }
  attributes(){
    
  }

}
