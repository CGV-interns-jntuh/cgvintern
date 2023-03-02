import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IheaderService } from '../iheader.service';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private activeRouter:ActivatedRoute, 
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable:any,
    private dialogRef:MatDialogRef<CommentsComponent>) { }

  id:any
  result:any;
  ngOnInit(): void {
    this.getComment()
  }

  getComment(){
    //this.id=this.activeRouter.snapshot.params['id'];
    this.id = this.anyvariable
    console.log("Comment DATA ::"+this.id);
    this.result = this.iHeaderSvc
        .getComment(this.id)
       .subscribe((data: any) => {
        console.log( data);
          this.result = data;
         this.id= this.result.tallyNumber
         console.log('FROM COMMENTS APP'); 
        });
        console.log(' Data :'+this.result);
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
