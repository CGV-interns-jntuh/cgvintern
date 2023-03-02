import { IitemService } from './../../iitem.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-createitem-location',
  templateUrl: './createitem-location.component.html',
  styleUrls: ['./createitem-location.component.css'],
})
export class CreateitemLocationComponent implements OnInit {
  constructor(
    private router: Router,
    public icarSvc: IitemService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<CreateitemLocationComponent>
  ) {}

  form!: FormGroup;
  result: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      storer: '0013 Neils Item Storer',
      item: 'CPBKLT1 SAMPLE DSP1 BOOKLET',
      buildingnumber: 13,
      Floor: [null],
      Aisle: [null],
      Slot: [null],
      sortseqNumber: [null],
      lotCode1: [null],
      lotCode2: [null],
      lotCode3: [null],
      weight: ['', [Validators.pattern('[0-9]{1,6}')]],
      date: [null],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addItemLocation() {
    console.log('added');
  }
}
