import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesUpdateStatusComponent } from './ww-boxes-update-status.component';

describe('WwBoxesUpdateStatusComponent', () => {
  let component: WwBoxesUpdateStatusComponent;
  let fixture: ComponentFixture<WwBoxesUpdateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesUpdateStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
