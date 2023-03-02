import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentRemovePressHoldComponent } from './box-content-remove-press-hold.component';

describe('BoxContentRemovePressHoldComponent', () => {
  let component: BoxContentRemovePressHoldComponent;
  let fixture: ComponentFixture<BoxContentRemovePressHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentRemovePressHoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentRemovePressHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
