import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InboundStagingService } from './inbound-staging.service';

@Component({
  selector: 'app-inbound-staging',
  templateUrl: './inbound-staging.component.html',
  styleUrls: ['./inbound-staging.component.css'],
})
export class InboundStagingComponent implements OnInit {
  error: string = '';
  maintenanceTypes = ['A- Available', 'D- Damaged', 'H- Held'];
  stagingForm = this.fb.group({
    tallynumber: [null, Validators.required],
    item: [null, Validators.required],
    qty: [null, Validators.required],
    type: [null, Validators.required],
    lot1: [null],
    lot2: [null],
    lot3: [null],
    location: [null],
  });
  // item: any = [];
  // location: any = [];
  result: any = [];
  count = 0;
  constructor(
    private fb: FormBuilder,
    public iStagingSvc: InboundStagingService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    var res = this.stagingForm.value;

    this.result = this.iStagingSvc
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
    var res = this.stagingForm.value;
    if (this.count === 2) {
      this.result = this.iStagingSvc
        .getItem(res.tallynumber, res.item, res.qty, res.type)
        .subscribe((data) => {
          this.result = data;
          if (this.result[0].data[10].value == 'Tally Not Found.') {
            this.error = 'Tally Number not available';
            //this.result[0].data[10].value;
          }

          console.log(this.result);
        });
    }
    if (this.count === 3) {
      this.result = this.iStagingSvc
        .getLocation(res.tallynumber, res.location)
        .subscribe((data) => {
          this.result = data[0];
          console.log(this.result);
        });
    }
  }
}
