import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IheaderService } from '../iheader.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-tally-detail-comments',
  templateUrl: './tally-detail-comments.component.html',
  styleUrls: ['./tally-detail-comments.component.css'],
})
export class TallyDetailCommentsComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<TallyDetailCommentsComponent>
  ) {}

  id: any;
  result: any;
  ngOnInit(): void {
    this.getComment();
  }

  getComment() {
    //this.id=this.activeRouter.snapshot.params['id'];
    this.id = this.anyvariable;
    this.result = this.iHeaderSvc
      .getTallyDetailComment(this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.result = data;
        this.id = this.result.tallyNumber;
      });
    console.log(' Data :' + this.result);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
