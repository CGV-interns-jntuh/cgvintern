import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablePrintComponent } from './receivable-print.component';

describe('ReceivablePrintComponent', () => {
  let component: ReceivablePrintComponent;
  let fixture: ComponentFixture<ReceivablePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivablePrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivablePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
