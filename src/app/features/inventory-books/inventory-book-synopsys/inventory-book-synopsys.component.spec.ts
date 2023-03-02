import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBookSynopsysComponent } from './inventory-book-synopsys.component';

describe('InventoryBookSynopsysComponent', () => {
  let component: InventoryBookSynopsysComponent;
  let fixture: ComponentFixture<InventoryBookSynopsysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBookSynopsysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBookSynopsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
