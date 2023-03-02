import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesChgCustomerComponent } from './ww-boxes-chg-customer.component';

describe('WwBoxesChgCustomerComponent', () => {
  let component: WwBoxesChgCustomerComponent;
  let fixture: ComponentFixture<WwBoxesChgCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesChgCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesChgCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
