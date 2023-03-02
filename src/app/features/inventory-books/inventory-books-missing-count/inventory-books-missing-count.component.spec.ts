import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBooksMissingCountComponent } from './inventory-books-missing-count.component';

describe('InventoryBooksMissingCountComponent', () => {
  let component: InventoryBooksMissingCountComponent;
  let fixture: ComponentFixture<InventoryBooksMissingCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBooksMissingCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBooksMissingCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
