import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsInventoryComponent } from './tags-inventory.component';

describe('TagsInventoryComponent', () => {
  let component: TagsInventoryComponent;
  let fixture: ComponentFixture<TagsInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
