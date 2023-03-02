import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBooksComponent } from './inventory-books.component';

describe('InventoryBooksComponent', () => {
  let component: InventoryBooksComponent;
  let fixture: ComponentFixture<InventoryBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
