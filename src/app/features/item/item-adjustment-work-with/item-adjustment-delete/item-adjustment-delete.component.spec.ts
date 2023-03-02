import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdjustmentDeleteComponent } from './item-adjustment-delete.component';

describe('ItemAdjustmentDeleteComponent', () => {
  let component: ItemAdjustmentDeleteComponent;
  let fixture: ComponentFixture<ItemAdjustmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAdjustmentDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAdjustmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
