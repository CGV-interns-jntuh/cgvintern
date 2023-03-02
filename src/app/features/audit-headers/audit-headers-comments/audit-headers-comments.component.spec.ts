import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditHeadersCommentsComponent } from './audit-headers-comments.component';

describe('AuditHeadersCommentsComponent', () => {
  let component: AuditHeadersCommentsComponent;
  let fixture: ComponentFixture<AuditHeadersCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditHeadersCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditHeadersCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
