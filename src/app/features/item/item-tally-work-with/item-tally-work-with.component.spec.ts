import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTallyWorkWithComponent } from './item-tally-work-with.component';

describe('ItemTallyWorkWithComponent', () => {
  let component: ItemTallyWorkWithComponent;
  let fixture: ComponentFixture<ItemTallyWorkWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTallyWorkWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTallyWorkWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
