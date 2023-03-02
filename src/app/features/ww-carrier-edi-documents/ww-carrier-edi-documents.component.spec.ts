import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwCarrierEdiDocumentsComponent } from './ww-carrier-edi-documents.component';

describe('WwCarrierEdiDocumentsComponent', () => {
  let component: WwCarrierEdiDocumentsComponent;
  let fixture: ComponentFixture<WwCarrierEdiDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwCarrierEdiDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwCarrierEdiDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
