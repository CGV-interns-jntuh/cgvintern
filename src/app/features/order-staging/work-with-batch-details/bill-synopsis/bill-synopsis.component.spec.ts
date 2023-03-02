import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSynopsisComponent } from './bill-synopsis.component';

describe('BillSynopsisComponent', () => {
  let component: BillSynopsisComponent;
  let fixture: ComponentFixture<BillSynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillSynopsisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
