import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.component.html',
  styleUrls: ['./add-balance.component.css'],
})
export class AddBalanceComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<AddBalanceComponent>
  ) {}

  form!: FormGroup;
  result: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      StorerNumber: 13,
      Item: 'AACNDF80823 TEST 123',
      BalanceDate: '12/19/2022',
      LotCode1: '',
      LotCode2: '',
      LotCode3: '',
      Building: 13,
      RecordType: 'P',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addItemBalance() {
    console.log('added');
  }
}
