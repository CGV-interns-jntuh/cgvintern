import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdjustmentWorkWithComponent } from './item-adjustment-work-with.component';

describe('ItemAdjustmentWorkWithComponent', () => {
  let component: ItemAdjustmentWorkWithComponent;
  let fixture: ComponentFixture<ItemAdjustmentWorkWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAdjustmentWorkWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAdjustmentWorkWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
