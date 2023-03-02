import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLpBookToCountComponent } from './inventory-lp-book-to-count.component';

describe('InventoryLpBookToCountComponent', () => {
  let component: InventoryLpBookToCountComponent;
  let fixture: ComponentFixture<InventoryLpBookToCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryLpBookToCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryLpBookToCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
