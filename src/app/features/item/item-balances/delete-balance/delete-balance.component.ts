import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-balance',
  templateUrl: './delete-balance.component.html',
  styleUrls: ['./delete-balance.component.css'],
})
export class DeleteBalanceComponent implements OnInit {
  item: any;
  form!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public anyvariable: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteBalanceComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Building: 13,
      storer: 13,
      Item: 'AACNDF80823 TEST 123',
      LotCode: '',
      Date: '',
      Type: 'P',
    });
  }
  deleteItemBalance() {
    alert('Deleted');
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
