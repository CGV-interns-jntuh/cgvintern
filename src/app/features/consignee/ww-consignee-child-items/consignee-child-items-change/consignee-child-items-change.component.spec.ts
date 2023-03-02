import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeChildItemsChangeComponent } from './consignee-child-items-change.component';

describe('ConsigneeChildItemsChangeComponent', () => {
  let component: ConsigneeChildItemsChangeComponent;
  let fixture: ComponentFixture<ConsigneeChildItemsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigneeChildItemsChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigneeChildItemsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
