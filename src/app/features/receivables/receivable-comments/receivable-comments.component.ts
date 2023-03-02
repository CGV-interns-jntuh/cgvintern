import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-receivable-comments',
  templateUrl: './receivable-comments.component.html',
  styleUrls: ['./receivable-comments.component.css']
})
export class ReceivableCommentsComponent implements OnInit {

  form!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    public iHeaderSvc: IheaderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private dialogRef: MatDialogRef<ReceivableCommentsComponent>
  ) { }

  ngOnInit(): void {

    this.form= this.fb.group({
      FileId:'',
      Key:'',
      Sub:'',
      Comment:''
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
