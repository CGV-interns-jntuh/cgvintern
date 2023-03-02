import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeChildItemsAddComponent } from './consignee-child-items-add.component';

describe('ConsigneeChildItemsAddComponent', () => {
  let component: ConsigneeChildItemsAddComponent;
  let fixture: ComponentFixture<ConsigneeChildItemsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigneeChildItemsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigneeChildItemsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
