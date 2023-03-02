import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRebalancesComponent } from './item-rebalances.component';

describe('ItemRebalancesComponent', () => {
  let component: ItemRebalancesComponent;
  let fixture: ComponentFixture<ItemRebalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRebalancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemRebalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
