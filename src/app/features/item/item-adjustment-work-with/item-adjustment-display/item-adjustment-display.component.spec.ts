import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdjustmentDisplayComponent } from './item-adjustment-display.component';

describe('ItemAdjustmentDisplayComponent', () => {
  let component: ItemAdjustmentDisplayComponent;
  let fixture: ComponentFixture<ItemAdjustmentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAdjustmentDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAdjustmentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
