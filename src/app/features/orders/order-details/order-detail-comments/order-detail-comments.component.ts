import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from 'src/app/features/tallys/iheader.service';

@Component({
  selector: 'app-order-detail-comments',
  templateUrl: './order-detail-comments.component.html',
  styleUrls: ['./order-detail-comments.component.css']
})
export class OrderDetailCommentsComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public iHeaderSvc: IheaderService, 
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OrderDetailCommentsComponent>
  ) { }

 

  ngOnInit(): void {
    this.form= this.fb.group({
      order:this.anyvariable.code,
     
      comments: this.fb.array([]) , 
    })

    this.addComments();
  }

  comments() : FormArray {  
    return this.form.get("comments") as FormArray  
  }  

  newComment(): FormGroup {  
    return this.fb.group({  
      comment: '',  
      print: '',  
      form:'',
      type:'',
    })  
  }  

  addComments() {  
    this.comments().push(this.newComment());  
  }  
     
  removeComments(i:number) {  
    this.comments().removeAt(i);  
  } 

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }

 

}
