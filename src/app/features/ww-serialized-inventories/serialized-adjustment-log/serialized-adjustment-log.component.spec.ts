import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerializedAdjustmentLogComponent } from './serialized-adjustment-log.component';

describe('SerializedAdjustmentLogComponent', () => {
  let component: SerializedAdjustmentLogComponent;
  let fixture: ComponentFixture<SerializedAdjustmentLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerializedAdjustmentLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerializedAdjustmentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
