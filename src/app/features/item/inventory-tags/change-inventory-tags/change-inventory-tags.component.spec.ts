import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInventoryTagsComponent } from './change-inventory-tags.component';

describe('ChangeInventoryTagsComponent', () => {
  let component: ChangeInventoryTagsComponent;
  let fixture: ComponentFixture<ChangeInventoryTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeInventoryTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeInventoryTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
