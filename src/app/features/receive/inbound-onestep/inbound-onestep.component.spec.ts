import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundOnestepComponent } from './inbound-onestep.component';

describe('InboundOnestepComponent', () => {
  let component: InboundOnestepComponent;
  let fixture: ComponentFixture<InboundOnestepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundOnestepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundOnestepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
