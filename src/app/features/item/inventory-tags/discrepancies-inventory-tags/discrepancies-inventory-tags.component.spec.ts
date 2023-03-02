import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscrepanciesInventoryTagsComponent } from './discrepancies-inventory-tags.component';

describe('DiscrepanciesInventoryTagsComponent', () => {
  let component: DiscrepanciesInventoryTagsComponent;
  let fixture: ComponentFixture<DiscrepanciesInventoryTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscrepanciesInventoryTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscrepanciesInventoryTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
