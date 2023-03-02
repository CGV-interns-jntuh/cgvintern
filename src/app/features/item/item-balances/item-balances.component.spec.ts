import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBalancesComponent } from './item-balances.component';

describe('ItemBalancesComponent', () => {
  let component: ItemBalancesComponent;
  let fixture: ComponentFixture<ItemBalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBalancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
