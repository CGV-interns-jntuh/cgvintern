import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBookCountListingComponent } from './inventory-book-count-listing.component';

describe('InventoryBookCountListingComponent', () => {
  let component: InventoryBookCountListingComponent;
  let fixture: ComponentFixture<InventoryBookCountListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBookCountListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBookCountListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
