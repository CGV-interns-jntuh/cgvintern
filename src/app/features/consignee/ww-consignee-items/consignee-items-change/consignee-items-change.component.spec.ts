import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeItemsChangeComponent } from './consignee-items-change.component';

describe('ConsigneeItemsChangeComponent', () => {
  let component: ConsigneeItemsChangeComponent;
  let fixture: ComponentFixture<ConsigneeItemsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigneeItemsChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigneeItemsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
