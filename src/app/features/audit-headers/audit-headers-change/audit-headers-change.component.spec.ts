import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditHeadersChangeComponent } from './audit-headers-change.component';

describe('AuditHeadersChangeComponent', () => {
  let component: AuditHeadersChangeComponent;
  let fixture: ComponentFixture<AuditHeadersChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditHeadersChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditHeadersChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
