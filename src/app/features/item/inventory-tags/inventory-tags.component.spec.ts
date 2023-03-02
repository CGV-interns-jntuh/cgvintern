import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTagsComponent } from './inventory-tags.component';

describe('InventoryTagsComponent', () => {
  let component: InventoryTagsComponent;
  let fixture: ComponentFixture<InventoryTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
