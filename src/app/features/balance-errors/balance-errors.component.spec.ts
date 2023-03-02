import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceErrorsComponent } from './balance-errors.component';

describe('BalanceErrorsComponent', () => {
  let component: BalanceErrorsComponent;
  let fixture: ComponentFixture<BalanceErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
