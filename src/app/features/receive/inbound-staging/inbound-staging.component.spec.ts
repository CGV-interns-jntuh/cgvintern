import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundStagingComponent } from './inbound-staging.component';

describe('InboundStagingComponent', () => {
  let component: InboundStagingComponent;
  let fixture: ComponentFixture<InboundStagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundStagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundStagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
