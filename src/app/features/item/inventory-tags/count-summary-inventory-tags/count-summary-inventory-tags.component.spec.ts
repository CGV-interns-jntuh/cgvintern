import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSummaryInventoryTagsComponent } from './count-summary-inventory-tags.component';

describe('CountSummaryInventoryTagsComponent', () => {
  let component: CountSummaryInventoryTagsComponent;
  let fixture: ComponentFixture<CountSummaryInventoryTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountSummaryInventoryTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountSummaryInventoryTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
