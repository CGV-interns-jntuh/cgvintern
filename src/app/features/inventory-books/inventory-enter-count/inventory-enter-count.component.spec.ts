import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryEnterCountComponent } from './inventory-enter-count.component';

describe('InventoryEnterCountComponent', () => {
  let component: InventoryEnterCountComponent;
  let fixture: ComponentFixture<InventoryEnterCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryEnterCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryEnterCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
