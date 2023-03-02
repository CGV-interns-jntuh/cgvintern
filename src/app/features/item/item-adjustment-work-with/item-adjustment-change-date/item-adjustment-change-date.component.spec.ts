import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdjustmentChangeDateComponent } from './item-adjustment-change-date.component';

describe('ItemAdjustmentChangeDateComponent', () => {
  let component: ItemAdjustmentChangeDateComponent;
  let fixture: ComponentFixture<ItemAdjustmentChangeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAdjustmentChangeDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAdjustmentChangeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
