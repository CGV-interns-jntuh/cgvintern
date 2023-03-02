import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwBoxesExportBoxComponent } from './ww-boxes-export-box.component';

describe('WwBoxesExportBoxComponent', () => {
  let component: WwBoxesExportBoxComponent;
  let fixture: ComponentFixture<WwBoxesExportBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwBoxesExportBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwBoxesExportBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
