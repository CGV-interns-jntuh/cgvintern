import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwConsigneeChildItemsComponent } from './ww-consignee-child-items.component';

describe('WwConsigneeChildItemsComponent', () => {
  let component: WwConsigneeChildItemsComponent;
  let fixture: ComponentFixture<WwConsigneeChildItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwConsigneeChildItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwConsigneeChildItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
