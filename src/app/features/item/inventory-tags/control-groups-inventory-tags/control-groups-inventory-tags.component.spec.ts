import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGroupsInventoryTagsComponent } from './control-groups-inventory-tags.component';

describe('ControlGroupsInventoryTagsComponent', () => {
  let component: ControlGroupsInventoryTagsComponent;
  let fixture: ComponentFixture<ControlGroupsInventoryTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlGroupsInventoryTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlGroupsInventoryTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
