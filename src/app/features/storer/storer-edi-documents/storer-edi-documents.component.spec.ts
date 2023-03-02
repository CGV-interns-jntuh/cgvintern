import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerEdiDocumentsComponent } from './storer-edi-documents.component';

describe('StorerEdiDocumentsComponent', () => {
  let component: StorerEdiDocumentsComponent;
  let fixture: ComponentFixture<StorerEdiDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerEdiDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerEdiDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
