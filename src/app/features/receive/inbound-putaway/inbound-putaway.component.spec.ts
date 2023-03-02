import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundPutawayComponent } from './inbound-putaway.component';

describe('InboundPutawayComponent', () => {
  let component: InboundPutawayComponent;
  let fixture: ComponentFixture<InboundPutawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundPutawayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundPutawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
