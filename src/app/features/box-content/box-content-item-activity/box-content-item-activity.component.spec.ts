import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentItemActivityComponent } from './box-content-item-activity.component';

describe('BoxContentItemActivityComponent', () => {
  let component: BoxContentItemActivityComponent;
  let fixture: ComponentFixture<BoxContentItemActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentItemActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxContentItemActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
