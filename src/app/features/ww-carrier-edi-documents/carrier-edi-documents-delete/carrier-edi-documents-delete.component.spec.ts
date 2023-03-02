import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierEdiDocumentsDeleteComponent } from './carrier-edi-documents-delete.component';

describe('CarrierEdiDocumentsDeleteComponent', () => {
  let component: CarrierEdiDocumentsDeleteComponent;
  let fixture: ComponentFixture<CarrierEdiDocumentsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierEdiDocumentsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrierEdiDocumentsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
