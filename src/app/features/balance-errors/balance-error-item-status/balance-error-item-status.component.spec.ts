import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceErrorItemStatusComponent } from './balance-error-item-status.component';

describe('BalanceErrorItemStatusComponent', () => {
  let component: BalanceErrorItemStatusComponent;
  let fixture: ComponentFixture<BalanceErrorItemStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceErrorItemStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceErrorItemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
