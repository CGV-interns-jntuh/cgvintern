import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentItemLabelComponent } from './box-content-item-label.component';

describe('BoxContentItemLabelComponent', () => {
  let component: BoxContentItemLabelComponent;
  let fixture: ComponentFixture<BoxContentItemLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentItemLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentItemLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
