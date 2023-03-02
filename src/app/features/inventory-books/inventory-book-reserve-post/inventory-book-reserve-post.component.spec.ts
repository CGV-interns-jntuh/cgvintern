import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBookReservePostComponent } from './inventory-book-reserve-post.component';

describe('InventoryBookReservePostComponent', () => {
  let component: InventoryBookReservePostComponent;
  let fixture: ComponentFixture<InventoryBookReservePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBookReservePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBookReservePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
