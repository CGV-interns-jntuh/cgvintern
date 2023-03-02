import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBooksWorkSheetComponent } from './inventory-books-work-sheet.component';

describe('InventoryBooksWorkSheetComponent', () => {
  let component: InventoryBooksWorkSheetComponent;
  let fixture: ComponentFixture<InventoryBooksWorkSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBooksWorkSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBooksWorkSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
