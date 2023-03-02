import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InboundPutawayService } from './inbound-putaway.service';

@Component({
  selector: 'app-inbound-putaway',
  templateUrl: './inbound-putaway.component.html',
  styleUrls: ['./inbound-putaway.component.css'],
})
export class InboundPutawayComponent implements OnInit {
  error: string = '';
  maintenanceTypes = ['A- Available', 'D- Damaged', 'H- Held'];
  putAwayForm = this.fb.group({
    tallynumber: [null],
    item: [null, Validators.required],
    qty: [null, Validators.required],
    type: [null, Validators.required],
    lot1: [null],
    lot2: [null],
    lot3: [null],
    location: [null],
  });
  result: any = [];
  count = 0;
  constructor(
    private fb: FormBuilder,
    public iPutAwaySvc: InboundPutawayService
  ) {}

  ngOnInit(): void {}
  onSubmit(): void {
    var res = this.putAwayForm.value;

    this.result = this.iPutAwaySvc
      .getData(
        res.tallynumber,
        res.item,
        res.qty,
        res.type,
        res.lot1,
        res.lot2,
        res.lot3,
        res.location
      )
      .subscribe((data) => {
        this.result = data[0];
        // if (data.success) {
        //   alert('Data saved successfully');
        // }
        console.log(this.result);
      });
  }

  getCount() {
    this.error = '';
    this.count++;
    var res = this.putAwayForm.value;
    if (this.count === 2) {
      this.result = this.iPutAwaySvc
        .getItem(res.tallynumber, res.item, res.qty, res.type)
        .subscribe((data) => {
          this.result = data;
          if (this.result[0].data[10].value == 'Tally Not Found.') {
            this.error = 'Tally Number not available';
          }

          console.log(this.result);
        });
    }
    if (this.count === 3) {
      this.result = this.iPutAwaySvc
        .getLocation(res.tallynumber, res.location)
        .subscribe((data) => {
          this.result = data[0];
          console.log(this.result);
        });
    }
  }
}
