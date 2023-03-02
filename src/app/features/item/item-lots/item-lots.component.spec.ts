import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLotsComponent } from './item-lots.component';

describe('ItemLotsComponent', () => {
  let component: ItemLotsComponent;
  let fixture: ComponentFixture<ItemLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
