import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditHeadersComponent } from './audit-headers.component';

describe('AuditHeadersComponent', () => {
  let component: AuditHeadersComponent;
  let fixture: ComponentFixture<AuditHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
