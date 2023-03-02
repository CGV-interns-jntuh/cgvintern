import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesItemLabelsComponent } from './ww-boxes-item-labels.component';

describe('WwBoxesItemLabelsComponent', () => {
  let component: WwBoxesItemLabelsComponent;
  let fixture: ComponentFixture<WwBoxesItemLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesItemLabelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesItemLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
