import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierEdiDocumentsChangeComponent } from './carrier-edi-documents-change.component';

describe('CarrierEdiDocumentsChangeComponent', () => {
  let component: CarrierEdiDocumentsChangeComponent;
  let fixture: ComponentFixture<CarrierEdiDocumentsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierEdiDocumentsChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrierEdiDocumentsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
