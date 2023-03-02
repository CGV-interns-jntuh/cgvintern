import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBookToCountComponent } from './inventory-book-to-count.component';

describe('InventoryBookToCountComponent', () => {
  let component: InventoryBookToCountComponent;
  let fixture: ComponentFixture<InventoryBookToCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBookToCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBookToCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
