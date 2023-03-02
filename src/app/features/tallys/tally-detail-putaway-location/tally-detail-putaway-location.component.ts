import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../iheader.service';

@Component({
  selector: 'app-tally-detail-putaway-location',
  templateUrl: './tally-detail-putaway-location.component.html',
  styleUrls: ['./tally-detail-putaway-location.component.css']
})
export class TallyDetailPutawayLocationComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<TallyDetailPutawayLocationComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      tally:1157789,
      line:100,
      building:13,
      item:'TEST1',
      description:'Item Test 1',
      lotCodes:'',
      Quantity:56,
      over:'',
      short:'',
      locations: this.fb.array([]) , 
    })

    this.addlocations();
  }

  locations() : FormArray {  
    return this.form.get("locations") as FormArray  
  }  

  newLocation(): FormGroup {  
    return this.fb.group({  
      location: '',  
      normal: '',  
      damaged:'',
      held:'',
      user1:'',
      user2:'',
      user3:'',
      user4:''
    })  
  }  

  addlocations() {  
    this.locations().push(this.newLocation());  
  }  
     
  removeLocations(i:number) {  
    this.locations().removeAt(i);  
  }  

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

  createPutawayLocation(){
    
  }

}
