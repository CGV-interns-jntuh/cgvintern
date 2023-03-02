import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerExportComponent } from './storer-export.component';

describe('StorerExportComponent', () => {
  let component: StorerExportComponent;
  let fixture: ComponentFixture<StorerExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerExportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
