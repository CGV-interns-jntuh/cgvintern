import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalComponent } from 'src/app/Global-Component';
import { IheaderService } from '../iheader.service';

@Component({
  selector: 'app-tally-putaway-update',
  templateUrl: './tally-putaway-update.component.html',
  styleUrls: ['./tally-putaway-update.component.css']
})
export class TallyPutawayUpdateComponent implements OnInit {

  storer: any;
 form!: FormGroup;
 result: any;
 user = GlobalComponent.user;
 constructor(public iHeaderSvc: IheaderService, 
  @Inject(MAT_DIALOG_DATA) public anyvariable: any,
   private fb: FormBuilder,
  private dialogRef: MatDialogRef<TallyPutawayUpdateComponent>
  ) 
  { }


  ngOnInit(): void {
  

    this.form=this.fb.group({
      

      Tally: 1157789,
      Line:  100,
      Item: 'TEST1',
      Building: 13,
      Description: 'Test item 1',
      LotCodes:'',
      Quantity: 56,
      Over: '',
      Short: '',
      locations: this.fb.array([]) ,  


    });
    
   
  }
 
  
  locations() : FormArray {  
    return this.form.get("locations") as FormArray  
  }  
     
  newLocation(): FormGroup {  
    return this.fb.group({  
      Location: '',  
      Normal: '',
      Damaged: '',
      Held: '',
      User1: '',  
      User2: '', 
      User3: '', 
      User4: '', 
    })  
  }  
     
  addLocation() {  
    this.locations().push(this.newLocation());  
  }  
     
  removeLocation(i:number) {  
    this.locations().removeAt(i);  
  }  

 
  closeDialog(){
      this.dialogRef.close();
  }
  addUsers(){

  }
  putawaylocationsupdate(){
    
  }

}
