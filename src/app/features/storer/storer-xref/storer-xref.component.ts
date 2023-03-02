import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-storer-xref',
  templateUrl: './storer-xref.component.html',
  styleUrls: ['./storer-xref.component.css'],
})
export class StorerXrefComponent implements OnInit {
  item: any;
  form!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StorerXrefComponent>
  ) {}

  ngOnInit(): void {
    this.item = this.anyvariable;
    this.form = this.fb.group({
      storer: 13,
      billTo: '',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
