import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInventoryTagsComponent } from './list-inventory-tags.component';

describe('ListInventoryTagsComponent', () => {
  let component: ListInventoryTagsComponent;
  let fixture: ComponentFixture<ListInventoryTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInventoryTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInventoryTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
