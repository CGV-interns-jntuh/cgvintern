import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentAddPressHoldComponent } from './box-content-add-press-hold.component';

describe('BoxContentAddPressHoldComponent', () => {
  let component: BoxContentAddPressHoldComponent;
  let fixture: ComponentFixture<BoxContentAddPressHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentAddPressHoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentAddPressHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
