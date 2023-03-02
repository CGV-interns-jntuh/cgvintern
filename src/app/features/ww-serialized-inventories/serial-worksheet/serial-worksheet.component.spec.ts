import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialWorksheetComponent } from './serial-worksheet.component';

describe('SerialWorksheetComponent', () => {
  let component: SerialWorksheetComponent;
  let fixture: ComponentFixture<SerialWorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialWorksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
