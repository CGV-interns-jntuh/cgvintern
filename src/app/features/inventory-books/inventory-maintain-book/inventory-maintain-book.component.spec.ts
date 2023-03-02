import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMaintainBookComponent } from './inventory-maintain-book.component';

describe('InventoryMaintainBookComponent', () => {
  let component: InventoryMaintainBookComponent;
  let fixture: ComponentFixture<InventoryMaintainBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryMaintainBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryMaintainBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
