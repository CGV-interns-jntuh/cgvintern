import { GlobalComponent } from './../../../Global-Component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IheaderService } from '../../tallys/iheader.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  form!: FormGroup;
  result: any;
  user = GlobalComponent.user;
  constructor(
    public iHeaderSvc: IheaderService,
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      LibraryName: '',
      FileName: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
  add() {}
}
