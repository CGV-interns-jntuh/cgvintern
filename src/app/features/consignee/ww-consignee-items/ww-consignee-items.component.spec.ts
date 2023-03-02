import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwConsigneeItemsComponent } from './ww-consignee-items.component';

describe('WwConsigneeItemsComponent', () => {
  let component: WwConsigneeItemsComponent;
  let fixture: ComponentFixture<WwConsigneeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwConsigneeItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwConsigneeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
