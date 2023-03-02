import { IitemService } from './../iitem.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
})
export class CreateItemComponent implements OnInit {
  constructor(
    private router: Router,
    public itemSvc: IitemService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<CreateItemComponent>
  ) {}

  form!: FormGroup;
  result: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      storerNumber: [null],
      itemCode: [null],
      description: [null],
      UPCTailCode: [null],
      productCode: [null],
      allowwebSelection: 'N',
      lottedItem: 'N',
      lotUnitWeight: 'N',
      sortMask: [null],
      applyToLot: [null],
      PlaceAfter: [null],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addItem() {
    console.log('added');
  }
}
