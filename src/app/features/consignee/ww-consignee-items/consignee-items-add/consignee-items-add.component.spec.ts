import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeItemsAddComponent } from './consignee-items-add.component';

describe('ConsigneeItemsAddComponent', () => {
  let component: ConsigneeItemsAddComponent;
  let fixture: ComponentFixture<ConsigneeItemsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigneeItemsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigneeItemsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
