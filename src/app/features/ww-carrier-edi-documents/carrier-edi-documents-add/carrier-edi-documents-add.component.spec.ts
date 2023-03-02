import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierEdiDocumentsAddComponent } from './carrier-edi-documents-add.component';

describe('CarrierEdiDocumentsAddComponent', () => {
  let component: CarrierEdiDocumentsAddComponent;
  let fixture: ComponentFixture<CarrierEdiDocumentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierEdiDocumentsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrierEdiDocumentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
