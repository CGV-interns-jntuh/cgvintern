import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditHeadersStatusComponent } from './audit-headers-status.component';

describe('AuditHeadersStatusComponent', () => {
  let component: AuditHeadersStatusComponent;
  let fixture: ComponentFixture<AuditHeadersStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditHeadersStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditHeadersStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
