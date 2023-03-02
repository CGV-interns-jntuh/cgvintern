import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBookDeleteComponent } from './inventory-book-delete.component';

describe('InventoryBookDeleteComponent', () => {
  let component: InventoryBookDeleteComponent;
  let fixture: ComponentFixture<InventoryBookDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBookDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBookDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
