import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceErrorsItemLocationsComponent } from './balance-errors-item-locations.component';

describe('BalanceErrorsItemLocationsComponent', () => {
  let component: BalanceErrorsItemLocationsComponent;
  let fixture: ComponentFixture<BalanceErrorsItemLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceErrorsItemLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceErrorsItemLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
